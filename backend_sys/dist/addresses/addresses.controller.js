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
exports.AddressesController = void 0;
const common_1 = require("@nestjs/common");
const addresses_service_1 = require("./addresses.service");
const create_address_dto_1 = require("./dto/create-address.dto");
const update_address_dto_1 = require("./dto/update-address.dto");
let AddressesController = class AddressesController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async create(createAddressDto) {
        if (!createAddressDto) {
            throw new common_1.BadRequestException('Invalid address data');
        }
        if (!createAddressDto.address_details || !createAddressDto.zip_code) {
            throw new common_1.BadRequestException('Address details and zip code are required');
        }
        if (isNaN(createAddressDto.zip_code)) {
            throw new common_1.BadRequestException('Invalid zip code format');
        }
        if (createAddressDto.zip_code.toString().length !== 4) {
            throw new common_1.BadRequestException('Zip code must be 4 digits long');
        }
        try {
            return await this.addressService.create(createAddressDto);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message || 'Invalid address data');
        }
    }
    async findAll() {
        return await this.addressService.findAll();
    }
    async findOne(id) {
        const address = await this.addressService.findOne(+id);
        if (!address) {
            throw new common_1.BadRequestException(`Address with ID ${id} not found`);
        }
        return address;
    }
    async update(id, updateAddressDto) {
        try {
            const address = await this.addressService.update(+id, updateAddressDto);
            if (!address) {
                throw new common_1.BadRequestException(`Address with ID ${id} not found`);
            }
            return address;
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message || 'Invalid address data');
        }
    }
    async partialUpdate(id, updateAddressDto) {
        const address = await this.addressService.findOne(+id);
        if (!address) {
            throw new common_1.BadRequestException(`Address with ID ${id} not found`);
        }
        Object.assign(address, updateAddressDto);
        return await this.addressService.update(+id, address);
    }
    async remove(id) {
        const result = await this.addressService.remove(+id);
        if (!result) {
            throw new common_1.BadRequestException(`Address with ID ${id} not found`);
        }
    }
};
exports.AddressesController = AddressesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_address_dto_1.CreateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_address_dto_1.UpdateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_address_dto_1.UpdateAddressDto]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "partialUpdate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AddressesController.prototype, "remove", null);
exports.AddressesController = AddressesController = __decorate([
    (0, common_1.Controller)('addresses'),
    __metadata("design:paramtypes", [addresses_service_1.AddressesService])
], AddressesController);
//# sourceMappingURL=addresses.controller.js.map