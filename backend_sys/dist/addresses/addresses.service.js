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
exports.AddressesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const address_entity_1 = require("./entities/address.entity");
let AddressesService = class AddressesService {
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async create(createAddressDto) {
        const address = this.addressRepository.create(createAddressDto);
        if (Array.isArray(address)) {
            throw new common_1.BadRequestException('Expected a single address, but received an array');
        }
        return this.addressRepository.save(address);
    }
    async findAll() {
        if (!this.addressRepository) {
            throw new common_1.BadRequestException('Address repository not found');
        }
        const addresses = await this.addressRepository.find();
        return addresses;
    }
    findOne(id) {
        if (!this.addressRepository) {
            throw new common_1.BadRequestException('Address repository not found');
        }
        if (isNaN(id)) {
            throw new common_1.BadRequestException('Invalid ID format');
        }
        return this.addressRepository.findOne({ where: { id } });
    }
    async update(id, updateAddressDto) {
        const address = await this.findOne(id);
        if (!address) {
            throw new common_1.BadRequestException(`Address with ID ${id} not found`);
        }
        Object.assign(address, updateAddressDto);
        return this.addressRepository.save(address);
    }
    async remove(id) {
        const address = await this.findOne(id);
        if (!address) {
            return false;
        }
        await this.addressRepository.remove(address);
        return true;
    }
};
exports.AddressesService = AddressesService;
exports.AddressesService = AddressesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(address_entity_1.Addresses)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AddressesService);
//# sourceMappingURL=addresses.service.js.map