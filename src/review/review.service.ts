import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewService {
	// constructor(
	// 	@InjectRepository(Review)
	// 	private readonly reviewRepository: Repository<Review>,
	// 	@InjectRepository(OrderProduct)
	// 	private readonly orderProductRepository: Repository<OrderProduct>,
	// 	private readonly userService: UserService,
	// 	// private readonly orderProductService: OrderProductService,
	// 	private readonly permissionService: PermissionService,
	// 	// private readonly shareService: ShareService,
	// 	// private readonly socketGateway: SocketGateway,
	// 	private readonly telegramService: NotificationMessageService,
	// 	private readonly reviewOrderProductService: ReviewOrderProductService,
	// ) {}
	// private async createReview(
	// 	payload: CreateReviewDto,
	// 	userCreatorId: string,
	// ) {
	// 	const newReview = this.reviewRepository.create({
	// 		...payload,
	// 		userCreatorId,
	// 	});
	// 	return await this.reviewRepository.save(newReview);
	// }
	// private getRecipientId(data: {
	// 	status: OrderProductStatus;
	// 	userReviewerId: string;
	// 	userOrderCreatorId: string;
	// 	userOrderProductCreatorId?: string | null;
	// 	userApproverId?: string | null;
	// }) {
	// 	const {
	// 		userReviewerId,
	// 		userOrderCreatorId,
	// 		userOrderProductCreatorId,
	// 		userApproverId,
	// 	} = data;
	// 	const result: string[] = [];
	// 	const statusSendNotificationToApprover = [
	// 		OrderProductStatus.PENDING_LEADER_APPROVAL,
	// 		OrderProductStatus.LEADER_REJECT,
	// 	];
	// 	// Neu status la pending leader approval hoac leader reject
	// 	// va nguoi danh gia/binh luan khac nguoi duyet thi se gui thong bao den nguoi duyet
	// 	if (
	// 		statusSendNotificationToApprover.includes(data.status) &&
	// 		userApproverId &&
	// 		userReviewerId !== userApproverId
	// 	) {
	// 		result.push(userApproverId);
	// 	}
	// 	// Neu nguoi danh gia/binh luan khac nguoi upload file thi se gui thong bao den nguoi upload file
	// 	if (
	// 		userOrderProductCreatorId &&
	// 		userReviewerId !== userOrderProductCreatorId
	// 	) {
	// 		result.push(userOrderProductCreatorId);
	// 	}
	// 	// Neu nguoi danh gia/binh luan khac nguoi tao order thi se gui thong bao den nguoi tao order
	// 	if (userReviewerId !== userOrderCreatorId) {
	// 		result.push(userOrderCreatorId);
	// 	}
	// 	return uniq(result);
	// }
	// private async handleCommentOnly(data: {
	// 	payload: CreateReviewDto;
	// 	userCreatorId: string;
	// 	orderProduct: OrderProduct;
	// }) {
	// 	const recipientId = this.getRecipientId({
	// 		status: data.orderProduct.status,
	// 		userReviewerId: data.userCreatorId,
	// 		userOrderCreatorId: data.orderProduct.order.userCreatorId,
	// 		userOrderProductCreatorId:
	// 			data.orderProduct.product?.userCreatorId ??
	// 			data.orderProduct.assigneeId,
	// 		userApproverId: data.orderProduct.approverId,
	// 	});
	// 	await this.telegramService.notifyNewComment(
	// 		recipientId,
	// 		data.orderProduct,
	// 		data.payload.comment,
	// 	);
	// 	return this.createReview(data.payload, data.userCreatorId);
	// }
	// // update status order product, thoong bao toi nguoi tao order
	// private async handleRate(data: {
	// 	rate: number;
	// 	comment: string;
	// 	orderProduct: OrderProduct;
	// 	userCreatorId: string;
	// }) {
	// 	switch (data.orderProduct.status) {
	// 		case OrderProductStatus.PENDING_LEADER_APPROVAL:
	// 		case OrderProductStatus.LEADER_REJECT:
	// 			return this.handleLeaderReview(data);
	// 		case OrderProductStatus.PENDING_APPROVAL:
	// 		case OrderProductStatus.REJECT:
	// 		case OrderProductStatus.COMPLETED:
	// 			return this.handleUserOrderCreatorReview(data);
	// 		default:
	// 			throw new BadRequestException(
	// 				'Cannot review this order product',
	// 			);
	// 	}
	// }
	// private async handleLeaderReview(data: {
	// 	rate: number;
	// 	comment: string;
	// 	orderProduct: OrderProduct;
	// 	userCreatorId: string;
	// }) {
	// 	const { rate, comment, orderProduct, userCreatorId } = data;
	// 	await this.reviewOrderProductService.newRateFromApprover(
	// 		orderProduct,
	// 		rate,
	// 		comment,
	// 	);
	// 	await this.createReview(
	// 		{ comment, rate, orderProductId: orderProduct.id },
	// 		userCreatorId,
	// 	);
	// }
	// private async handleUserOrderCreatorReview(data: {
	// 	rate: number;
	// 	comment: string;
	// 	orderProduct: OrderProduct;
	// 	userCreatorId: string;
	// }) {
	// 	const { rate, comment, orderProduct, userCreatorId } = data;
	// 	await this.reviewOrderProductService.updateOrderProductStatusByRate(
	// 		orderProduct,
	// 		rate,
	// 	);
	// 	await this.createReview(
	// 		{ comment, rate, orderProductId: orderProduct.id },
	// 		userCreatorId,
	// 	);
	// }
	// async create(payload: CreateReviewDto, req: Request) {
	// 	const { orderProductId, rate, comment } = payload;
	// 	const { userId, isAdmin } =
	// 		await this.permissionService.getPermissionUserLoggedIn(req);
	// 	const orderProduct = await this.orderProductRepository.findOne({
	// 		where: { id: orderProductId },
	// 		relations: ['productType', 'product', 'order'],
	// 	});
	// 	// Validate =================
	// 	if (!orderProduct) {
	// 		throw new ErrorResDto2(
	// 			'Order product not found',
	// 			APP_MESSAGE.ORDER_PRODUCT.NOT_FOUND,
	// 		);
	// 	}
	// 	if (!orderProduct.productId && rate) {
	// 		throw new ErrorResDto2(
	// 			'This order has no products to rate',
	// 			APP_MESSAGE.REVIEW.CAN_NOT_RATE_ORDER_PRODUCT_WITHOUT_PRODUCT,
	// 		);
	// 	}
	// 	if (
	// 		orderProduct.status ===
	// 			OrderProductStatus.PENDING_LEADER_APPROVAL ||
	// 		orderProduct.status === OrderProductStatus.LEADER_REJECT
	// 	) {
	// 		if (rate && !isAdmin && userId !== orderProduct.approverId) {
	// 			throw new ErrorResDto2(
	// 				'Not authorized to rate',
	// 				APP_MESSAGE.REVIEW.NOT_AUTHORIZED_TO_RATE,
	// 			);
	// 		}
	// 	}
	// 	// End Validate =================
	// 	if (rate) {
	// 		return this.handleRate({
	// 			rate,
	// 			comment,
	// 			orderProduct,
	// 			userCreatorId: userId,
	// 		});
	// 	} else {
	// 		return this.handleCommentOnly({
	// 			payload: {
	// 				comment,
	// 				orderProductId: orderProduct.id,
	// 			},
	// 			userCreatorId: userId,
	// 			orderProduct,
	// 		});
	// 	}
	// }
	// async getListReviewsByOrderId(
	// 	orderId: string,
	// 	query: GetListReviewsOfOrder,
	// ): Promise<Review[]> {
	// 	const { productTypeId } = query;
	// 	const queryGetListReviewsOfOrder = this.reviewRepository
	// 		.createQueryBuilder('review')
	// 		.innerJoin('review.orderProduct', 'orderProduct')
	// 		.innerJoin('orderProduct.productType', 'productType')
	// 		.select([
	// 			'review.id',
	// 			'review.comment',
	// 			'review.rate',
	// 			'review.userCreatorId',
	// 			'review.dateCreated',
	// 		])
	// 		.addSelect(['orderProduct.id', 'orderProduct.orderId'])
	// 		.addSelect([
	// 			'productType.id',
	// 			'productType.nameVi',
	// 			'productType.nameEn',
	// 			'productType.code',
	// 			'productType.order',
	// 			'productType.color',
	// 		])
	// 		.where('orderProduct.orderId = :orderId', { orderId })
	// 		.orderBy('review.dateCreated', 'DESC');
	// 	if (productTypeId) {
	// 		queryGetListReviewsOfOrder.andWhere(
	// 			'orderProduct.productTypeId = :productTypeId',
	// 			{
	// 				productTypeId,
	// 			},
	// 		);
	// 	}
	// 	const reviews = await queryGetListReviewsOfOrder.getMany();
	// 	const userIds = [
	// 		...new Set(
	// 			reviews.map((review) => review.userCreatorId).filter(Boolean),
	// 		),
	// 	];
	// 	const users = await this.userService.getUsersByIds(userIds);
	// 	const userMap = new Map(users.map((user) => [user.id, user]));
	// 	return reviews.map((review) => {
	// 		const user = userMap.get(review.userCreatorId);
	// 		return {
	// 			...review,
	// 			userCreator: user ? { id: user?.id, name: user?.name } : null,
	// 		};
	// 	}) as unknown as Review[];
	// }
	// async updateRateByUserCreator(
	// 	orderProductId: string,
	// 	userCreatorId: string,
	// 	rate: number,
	// ) {
	// 	await this.reviewRepository
	// 		.createQueryBuilder()
	// 		.update('review')
	// 		.set({ rate: rate })
	// 		.where('orderProductId = :orderProductId', { orderProductId })
	// 		.andWhere('userCreatorId = :userCreatorId', { userCreatorId })
	// 		.execute();
	// }
}
