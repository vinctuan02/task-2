import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductTypeService {
	// constructor(
	// 	@InjectRepository(ProductType)
	// 	private readonly productTypeRepo: Repository<ProductType>,
	// ) {}
	// async create(payload: CreateProductTypeDto) {
	// 	const { code } = payload;
	// 	await this.validateCode(code);
	// 	const item = this.productTypeRepo.create(payload);
	// 	return await this.productTypeRepo.save(item);
	// }
	// async getList(
	// 	query: GetListProductTypesDto,
	// ): Promise<DataPagination<ProductTypeWithCountProductDto>> {
	// 	const { page } = query;
	// 	const queryBuilder = this.productTypeRepo
	// 		.createQueryBuilder('productType')
	// 		// .select('productType')
	// 		.loadRelationCountAndMap(
	// 			'productType.productCount',
	// 			'productType.orderProducts',
	// 		)
	// 		.orderBy('`order`');
	// 	const [listProductType, totalItems] =
	// 		await queryBuilder.getManyAndCount();
	// 	// find all => totalItems = totalItems
	// 	const metadata = new MetadataDto(page, totalItems, totalItems);
	// 	return new DataPagination(
	// 		plainToInstance(ProductTypeWithCountProductDto, listProductType, {
	// 			excludeExtraneousValues: true,
	// 		}),
	// 		metadata,
	// 	);
	// }
	// async getListSimple(
	// 	query: GetListProductTypesDto,
	// ): Promise<DataPagination<SimpleProductTypeDto>> {
	// 	const { page, listProductTypeIds } = query;
	// 	const queryBuilder = this.productTypeRepo
	// 		.createQueryBuilder('productType')
	// 		.select('productType')
	// 		.orderBy('`order`');
	// 	if (listProductTypeIds && listProductTypeIds.length > 0) {
	// 		queryBuilder.where('productType.id IN (:...ids)', {
	// 			ids: listProductTypeIds,
	// 		});
	// 	}
	// 	const [listProductType, totalItems] =
	// 		await queryBuilder.getManyAndCount();
	// 	// find all => totalItems = totalItems
	// 	const metadata = new MetadataDto(page, totalItems, totalItems);
	// 	return new DataPagination(
	// 		plainToInstance(SimpleProductTypeDto, listProductType, {
	// 			excludeExtraneousValues: true,
	// 		}),
	// 		metadata,
	// 	);
	// }
	// async getListProductTypesMap(
	// 	listProductTypeIds: string[],
	// ): Promise<Map<string, ProductTypeName>> {
	// 	const productTypeMap = new Map<string, ProductTypeName>();
	// 	const listProductTypes = await this.productTypeRepo.find({
	// 		where: {
	// 			id: In(listProductTypeIds),
	// 		},
	// 		select: ['id', 'nameVi', 'nameEn'],
	// 	});
	// 	if (listProductTypes.length !== listProductTypeIds.length) {
	// 		throw new NotFoundException('Product type not found');
	// 	}
	// 	for (const pt of listProductTypes) {
	// 		productTypeMap.set(pt.id, { nameVi: pt.nameVi, nameEn: pt.nameEn });
	// 	}
	// 	return productTypeMap;
	// }
	// // bo bot truong
	// async findOnePublic(id: string): Promise<ProductTypeDto> {
	// 	const productType = await this.findOne(id);
	// 	return plainToInstance(ProductTypeDto, productType, {
	// 		excludeExtraneousValues: true,
	// 	});
	// }
	// // full truong
	// async findOne(id: string): Promise<ProductType> {
	// 	const productType = await this.productTypeRepo.findOneBy({ id });
	// 	if (!productType) {
	// 		throw new NotFoundException('Product type not found');
	// 	}
	// 	return productType;
	// }
	// async isExistByCode(code: string): Promise<boolean> {
	// 	const productType = await this.productTypeRepo.findOneBy({ code });
	// 	return !!productType;
	// }
	// async validateCode(code: string) {
	// 	const exists = await this.isExistByCode(code);
	// 	if (exists) {
	// 		throw new ErrorResDto2(
	// 			'Product type code already exists',
	// 			APP_MESSAGE.PRODUCT_TYPE.CODE_ALREADY_EXISTS,
	// 		);
	// 	}
	// }
	// async updateOrder(payload: UpdateProductTypeOrderDto) {
	// 	const { data } = payload;
	// 	if (!data) {
	// 		throw new BadRequestException('Invalid input');
	// 	}
	// 	const updatePromises = data.map(({ id, order }) =>
	// 		this.productTypeRepo
	// 			.createQueryBuilder()
	// 			.update(ProductType)
	// 			.set({ order })
	// 			.where('id = :id', { id })
	// 			.execute(),
	// 	);
	// 	await Promise.all(updatePromises);
	// }
	// async update(id: string, payload: UpdateProductTypeDto) {
	// 	const { code } = payload;
	// 	const productType = await this.findOne(id);
	// 	if (code && productType.code !== code) {
	// 		await this.validateCode(code);
	// 	}
	// 	Object.assign(productType, payload);
	// 	await this.productTypeRepo.save(productType);
	// }
	// async remove(id: string) {
	// 	const productType = await this.productTypeRepo.findOne({
	// 		where: { id },
	// 		relations: ['orderProducts'],
	// 	});
	// 	if (!productType) {
	// 		throw new NotFoundException('Product type not found');
	// 	}
	// 	if (productType.orderProducts.length > 0) {
	// 		throw new ErrorResDto2(
	// 			'Cannot delete product type because it has related products',
	// 			APP_MESSAGE.PRODUCT_TYPE.CANNOT_DELETE_PRODUCT_TYPE,
	// 		);
	// 	}
	// 	await this.productTypeRepo.delete(id);
	// }
}
