"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
const address_entity_1 = require("../addresses/entities/address.entity");
let UsersService = class UsersService {
    constructor(repository, addressRepository) {
        this.repository = repository;
        this.addressRepository = addressRepository;
    }
    async create(createUserDto) {
        const existingUser = await this.repository.findOneBy({
            email: createUserDto.email,
        });
        if (existingUser) {
            throw new common_1.ConflictException(`User with email ${createUserDto.email} already exists`);
        }
        const existingCin = await this.repository.findOneBy({
            cin: createUserDto.cin,
        });
        if (existingCin) {
            throw new common_1.ConflictException(`User with CIN ${createUserDto.cin} already exists`);
        }
        if (createUserDto.address_id) {
            const address = await this.addressRepository.findOneBy({
                id: createUserDto.address_id,
            });
            if (!address) {
                throw new common_1.BadRequestException(`Address with ID ${createUserDto.address_id} not found`);
            }
        }
        const user = new user_entity_1.User();
        user.first_name = createUserDto.first_name;
        user.last_name = createUserDto.last_name;
        user.cin = createUserDto.cin;
        user.email = createUserDto.email;
        user.phone = createUserDto.phone;
        user.role = createUserDto.role;
        const salt = await bcrypt.genSalt();
        user.password_hash = await bcrypt.hash(createUserDto.password, salt);
        if (createUserDto.profile_picture) {
            user.profile_picture = createUserDto.profile_picture;
        }
        if (createUserDto.address_id) {
            const address = await this.addressRepository.findOneBy({
                id: createUserDto.address_id,
            });
            if (address) {
                user.address = address;
            }
            else {
                throw new common_1.NotFoundException(`Address with ID ${createUserDto.address_id} not found`);
            }
        }
        if (createUserDto.is_active !== undefined) {
            user.is_active = createUserDto.is_active;
        }
        return await this.repository.save(user);
    }
    async findAll() {
        return await this.repository.find({
            relations: ['address'],
        });
    }
    async findOne(id) {
        return await this.repository.findOne({
            where: { id },
            relations: ['address'],
        });
    }
    async findByEmail(email) {
        return await this.repository.findOne({
            where: { email },
            relations: ['address'],
        });
    }
    async findByCin(cin) {
        return await this.repository.findOne({
            where: { cin },
            relations: ['address'],
        });
    }
    async update(id, updateUserDto) {
        const user = await this.repository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        if (updateUserDto.email && updateUserDto.email !== user.email) {
            const existingEmail = await this.repository.findOneBy({
                email: updateUserDto.email,
            });
            if (existingEmail) {
                throw new common_1.ConflictException(`User with email ${updateUserDto.email} already exists`);
            }
        }
        if (updateUserDto.cin && updateUserDto.cin !== user.cin) {
            const existingCin = await this.repository.findOneBy({
                cin: updateUserDto.cin,
            });
            if (existingCin) {
                throw new common_1.ConflictException(`User with CIN ${updateUserDto.cin} already exists`);
            }
        }
        if (updateUserDto.address_id) {
            const address = await this.addressRepository.findOneBy({
                id: updateUserDto.address_id,
            });
            if (!address) {
                throw new common_1.BadRequestException(`Address with ID ${updateUserDto.address_id} not found`);
            }
            user.address = address;
        }
        if (updateUserDto.password) {
            const salt = await bcrypt.genSalt();
            user.password_hash = await bcrypt.hash(updateUserDto.password, salt);
        }
        if (updateUserDto.first_name)
            user.first_name = updateUserDto.first_name;
        if (updateUserDto.last_name)
            user.last_name = updateUserDto.last_name;
        if (updateUserDto.cin)
            user.cin = updateUserDto.cin;
        if (updateUserDto.email)
            user.email = updateUserDto.email;
        if (updateUserDto.phone)
            user.phone = updateUserDto.phone;
        if (updateUserDto.profile_picture)
            user.profile_picture = updateUserDto.profile_picture;
        if (updateUserDto.is_active !== undefined)
            user.is_active = updateUserDto.is_active;
        return await this.repository.save(user);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            return false;
        }
        await this.repository.remove(user);
        return true;
    }
    async validateUserCredentials(email, password) {
        const user = await this.findByEmail(email);
        if (!user) {
            return null;
        }
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return null;
        }
        return user;
    }
    async updateLastLogin(id) {
        await this.repository.update(id, { last_login: new Date() });
    }
    async generateResetToken(email) {
        const user = await this.findByEmail(email);
        if (!user) {
            return null;
        }
        const token = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        const expiry = new Date();
        expiry.setHours(expiry.getHours() + 24);
        await this.repository.update(user.id, {
            reset_token: token,
            reset_token_expiry: expiry,
        });
        return token;
    }
    async resetPassword(token, newPassword) {
        const user = await this.repository.findOne({
            where: { reset_token: token },
        });
        if (!user) {
            return false;
        }
        const now = new Date();
        if (!user.reset_token_expiry || user.reset_token_expiry < now) {
            return false;
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(newPassword, salt);
        await this.repository.update(user.id, {
            password_hash: passwordHash,
            reset_token: undefined,
            reset_token_expiry: undefined,
        });
        return true;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(address_entity_1.Addresses)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map