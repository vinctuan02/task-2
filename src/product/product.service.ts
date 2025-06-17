import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
	// constructor(
	// 	@InjectRepository(Product)
	// 	private readonly productRepository: Repository<Product>,
	// 	// private readonly userService: UserService,
	// 	@Inject(forwardRef(() => FileService))
	// 	private readonly fileService: FileService,
	// ) {}
	// async create(payload: CreateProductDto): Promise<Product> {
	// 	const newProduct = this.productRepository.create(payload);
	// 	return await this.productRepository.save(newProduct);
	// }
	// async findAll(query: GetAllProductsDto): Promise<DataPagination<Product>> {
	// 	const { page, pageSize, skip } = query;
	// 	const currentPage = page;
	// 	const queryBuilder = this.productRepository
	// 		.createQueryBuilder('product')
	// 		.orderBy('product.dateUpdated', 'DESC')
	// 		.skip(skip)
	// 		.take(pageSize);
	// 	const [products, totalItems] = await queryBuilder.getManyAndCount();
	// 	// return products
	// 	const fileIds = products.map((item) => item.fileId);
	// 	const filesWithUrl = await this.fileService.getFileListWithUrl(fileIds);
	// 	const productsWithFile = products.map((item) => {
	// 		return {
	// 			...item,
	// 			file:
	// 				filesWithUrl.find((url) => url.id === item.fileId) ||
	// 				new File(),
	// 		};
	// 	}) as Product[];
	// 	// const totalPages = Math.ceil(totalItems / pageSize);
	// 	const metadata = new MetadataDto(
	// 		currentPage,
	// 		pageSize,
	// 		totalItems,
	// 		// totalPages,
	// 	);
	// 	return new DataPagination(productsWithFile, metadata);
	// }
	// async findOne(id: string): Promise<Product> {
	// 	const productById = await this.productRepository.findOne({
	// 		where: { id },
	// 	});
	// 	if (!productById) {
	// 		throw new ErrorResDto(
	// 			HttpStatus.BAD_REQUEST,
	// 			APP_MESSAGE.ORDER.GET_BY_ID_FAILED,
	// 			HttpErrorMessage.BAD_REQUEST,
	// 			[new ErrorDetail('orderId', APP_MESSAGE.ORDER.NOT_FOUND)],
	// 		);
	// 	}
	// 	const file = new File();
	// 	const productWithFileUrl = { ...productById, file } as Product;
	// 	return productWithFileUrl;
	// }
	// async delete(id: string) {
	// 	const product = await this.productRepository.findOne({ where: { id } });
	// 	if (product) {
	// 		await this.fileService.remove(product?.fileId);
	// 	}
	// 	await this.productRepository.delete(id).catch((error) => {
	// 		console.log(error);
	// 	});
	// }
}
