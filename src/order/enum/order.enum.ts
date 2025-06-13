export enum OrderStatus {
	NEW = 'new',
	IN_PROGRESS = 'in_progress',
	PENDING_LEADER_APPROVAL = 'pending_leader_approval',
	LEADER_REJECT = 'leader_reject',
	PENDING_APPROVAL = 'pending_approval',
	REJECT = 'reject',
	COMPLETED = 'completed',
	COMPLETED_PRODUCTION_LATE = 'completed_production_late',
	COMPLETED_APPROVAL_LATE = 'completed_approval_late',
	OVERDUE = 'overdue',
	CANCEL = 'cancel',
}
