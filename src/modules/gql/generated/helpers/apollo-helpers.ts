import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AuthPayloadKeySpecifier = ('success' | 'message' | 'token' | 'errors' | 'data' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | ChatMessageKeySpecifier)[];
export type ChatMessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Room?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatMessageResponseKeySpecifier)[];
export type ChatMessageResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'Messages' | 'CreatedBy' | 'Members' | 'Invitations' | ChatRoomKeySpecifier)[];
export type ChatRoomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	Messages?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	Invitations?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'User' | 'CreatedBy' | 'ChatRoom' | ChatRoomInvitationKeySpecifier)[];
export type ChatRoomInvitationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'instructions' | 'videoUrl' | 'template' | 'time' | 'challengeType' | 'forumTopicId' | 'order' | 'superOrder' | 'challengeOrder' | 'rank' | 'translations' | 'tests' | 'solutions' | 'files' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'CreatedBy' | 'Topic' | 'Block' | 'CodeChallengeBlock' | 'CodeChallengeCompletions' | CodeChallengeKeySpecifier)[];
export type CodeChallengeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	dashedName?: FieldPolicy<any> | FieldReadFunction<any>,
	localeTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	instructions?: FieldPolicy<any> | FieldReadFunction<any>,
	videoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeType?: FieldPolicy<any> | FieldReadFunction<any>,
	forumTopicId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	superOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	translations?: FieldPolicy<any> | FieldReadFunction<any>,
	tests?: FieldPolicy<any> | FieldReadFunction<any>,
	solutions?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isBeta?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Topic?: FieldPolicy<any> | FieldReadFunction<any>,
	Block?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallengeBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'Parent' | 'Challenges' | 'Children' | CodeChallengeBlockKeySpecifier)[];
export type CodeChallengeBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Challenges?: FieldPolicy<any> | FieldReadFunction<any>,
	Children?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeCompletionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'success' | 'content' | 'CreatedBy' | 'Task' | 'CodeChallenge' | CodeChallengeCompletionKeySpecifier)[];
export type CodeChallengeCompletionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeCompletionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CodeChallengeCompletionResponseKeySpecifier)[];
export type CodeChallengeCompletionResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DonateKeySpecifier = ('id' | 'date' | 'sum' | 'title' | 'donatorId' | 'Donator' | DonateKeySpecifier)[];
export type DonateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	donatorId?: FieldPolicy<any> | FieldReadFunction<any>,
	Donator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'abi' | 'address' | 'type' | 'source' | 'bytecode' | 'balance' | EthAccountKeySpecifier)[];
export type EthAccountFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	abi?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	bytecode?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'path' | 'filename' | 'name' | 'mimetype' | 'encoding' | 'size' | 'rank' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LearnStrategyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'level' | 'createdById' | 'CreatedBy' | 'LearnStrategyStages' | 'UserLearnStrategies' | LearnStrategyKeySpecifier)[];
export type LearnStrategyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	createdById?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategyStages?: FieldPolicy<any> | FieldReadFunction<any>,
	UserLearnStrategies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LearnStrategyStageKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'learnStrategyId' | 'LearnStrategy' | 'learnStrategyTargetId' | 'LearnStrategyTarget' | 'technologyId' | 'Technology' | 'level' | LearnStrategyStageKeySpecifier)[];
export type LearnStrategyStageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyId?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyTargetId?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategyTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyId?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MentorMenteeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | 'mentorId' | 'Mentor' | 'menteeId' | 'Mentee' | MentorMenteeKeySpecifier)[];
export type MentorMenteeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorId?: FieldPolicy<any> | FieldReadFunction<any>,
	Mentor?: FieldPolicy<any> | FieldReadFunction<any>,
	menteeId?: FieldPolicy<any> | FieldReadFunction<any>,
	Mentee?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('singleUpload' | 'deleteResource' | 'createBlogProcessor' | 'updateBlogProcessor' | 'createCommentProcessor' | 'updateCommentProcessor' | 'createTopicProcessor' | 'updateTopicProcessor' | 'createChatMessageProcessor' | 'createCodeChallengeCompletionProcessor' | 'updateCodeChallengeCompletionProcessor' | 'createTimerProcessor' | 'updateTimerProcessor' | 'deleteNotice' | 'createProjectProcessor' | 'updateProjectProcessor' | 'createTaskProcessor' | 'updateTaskProcessor' | 'createTechnology' | 'updateTechnology' | 'createUserTechnologyProcessor' | 'updateUserTechnologyProcessor' | 'updateCodeChallenge' | 'createTaskTechnologyProcessor' | 'updateTaskTechnologyProcessor' | 'createResetPasswordProcessor' | 'resetPasswordProcessor' | 'createLearnStrategy' | 'updateLearnStrategy' | 'createUserLearnStrategy' | 'createLearnStrategyStage' | 'deleteLearnStrategyStage' | 'createMentorMentee' | 'createOneDonate' | 'signup' | 'signin' | 'updateUserProcessor' | 'blockUser' | 'unblockUser' | 'updateOneUser' | 'updateCurrentUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteResource?: FieldPolicy<any> | FieldReadFunction<any>,
	createBlogProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBlogProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createCodeChallengeCompletionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeChallengeCompletionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotice?: FieldPolicy<any> | FieldReadFunction<any>,
	createProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	createLearnStrategyStage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteLearnStrategyStage?: FieldPolicy<any> | FieldReadFunction<any>,
	createMentorMentee?: FieldPolicy<any> | FieldReadFunction<any>,
	createOneDonate?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	blockUser?: FieldPolicy<any> | FieldReadFunction<any>,
	unblockUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateOneUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCurrentUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | 'CreatedBy' | 'User' | 'ChatMessage' | 'ChatRoomInvitation' | NoticeKeySpecifier)[];
export type NoticeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoomInvitation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | NotificationTypeKeySpecifier)[];
export type NotificationTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'domain' | 'description' | 'url' | 'content' | 'contentText' | 'sequence' | 'type' | 'status' | 'public' | 'oldID' | 'CreatedBy' | 'Resource' | 'Members' | 'ProjectTasks' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectTasks?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'User' | 'status' | 'Project' | ProjectMemberKeySpecifier)[];
export type ProjectMemberFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ProjectResponseKeySpecifier)[];
export type ProjectResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectTaskKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'Project' | 'Task' | ProjectTaskKeySpecifier)[];
export type ProjectTaskFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('files' | 'filesCount' | 'file' | 'resource' | 'resources' | 'resourcesCount' | 'chatMessage' | 'chatMessages' | 'chatMessagesCount' | 'chatRoom' | 'chatRooms' | 'chatRoomsCount' | 'codeChallengeCompletion' | 'codeChallengeCompletions' | 'timer' | 'timers' | 'timersCount' | 'notice' | 'notices' | 'noticesCount' | 'notificationTypes' | 'notificationTypesCount' | 'project' | 'projects' | 'projectsCount' | 'projectTasks' | 'task' | 'tasks' | 'tasksCount' | 'technology' | 'technologies' | 'technologiesCount' | 'userTechnology' | 'userTechnologies' | 'userTechnologysCount' | 'codeChallenge' | 'codeChallenges' | 'codeChallengeBlocks' | 'codeChallengeBlocksCount' | 'codeChallengeBlock' | 'tag' | 'tags' | 'tagsCount' | 'taskTechnology' | 'taskTechnologies' | 'taskTechnologysCount' | 'learnStrategy' | 'learnStrategies' | 'learnStrategiesCount' | 'userLearnStrategy' | 'userLearnStrategies' | 'userLearnStrategiesCount' | 'learnStrategyStage' | 'learnStrategyStages' | 'learnStrategyStagesCount' | 'mentorMentee' | 'mentorMentees' | 'mentorMenteesCount' | 'donate' | 'donates' | 'donatesCount' | 'users' | 'usersCount' | 'user' | 'me' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	filesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRooms?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoomsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
	timer?: FieldPolicy<any> | FieldReadFunction<any>,
	timers?: FieldPolicy<any> | FieldReadFunction<any>,
	timersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	notice?: FieldPolicy<any> | FieldReadFunction<any>,
	notices?: FieldPolicy<any> | FieldReadFunction<any>,
	noticesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	projectTasks?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	tasksCount?: FieldPolicy<any> | FieldReadFunction<any>,
	technology?: FieldPolicy<any> | FieldReadFunction<any>,
	technologies?: FieldPolicy<any> | FieldReadFunction<any>,
	technologiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnologysCount?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenges?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlocksCount?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	tagsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	taskTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	taskTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	taskTechnologysCount?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategies?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	userLearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	userLearnStrategies?: FieldPolicy<any> | FieldReadFunction<any>,
	userLearnStrategiesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyStage?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyStages?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyStagesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorMentee?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorMentees?: FieldPolicy<any> | FieldReadFunction<any>,
	mentorMenteesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	donate?: FieldPolicy<any> | FieldReadFunction<any>,
	donates?: FieldPolicy<any> | FieldReadFunction<any>,
	donatesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	usersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestErrorKeySpecifier = ('key' | 'message' | RequestErrorKeySpecifier)[];
export type RequestErrorFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordKeySpecifier = ('id' | 'foo' | ResetPasswordKeySpecifier)[];
export type ResetPasswordFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	foo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ResetPasswordResponseKeySpecifier)[];
export type ResetPasswordResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'components' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'isfolder' | 'uri' | 'class_key' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'commentOldID' | 'template' | 'mockUpdate' | 'CreatedBy' | 'Comments' | 'Topic' | 'Blog' | 'Task' | 'Image' | 'CodeChallenge' | 'Tags' | ResourceKeySpecifier)[];
export type ResourceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidemenu?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	isfolder?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	class_key?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	positiveVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	negativeVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	neutralVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	commentOldID?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	mockUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	Topic?: FieldPolicy<any> | FieldReadFunction<any>,
	Blog?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	Image?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ResourceResponseKeySpecifier)[];
export type ResourceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | 'CreatedBy' | 'Resource' | 'Tag' | ResourceTagKeySpecifier)[];
export type ResourceTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	Tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'CreatedBy' | 'Resources' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'status' | 'content' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'needHelp' | 'CreatedBy' | 'TaskProjects' | 'TaskTechnologies' | 'Parent' | 'CodeChallengeCompletion' | 'Timers' | 'Comments' | TaskKeySpecifier)[];
export type TaskFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	startDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	endDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	needHelp?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallengeCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
	Timers?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | TaskReactionKeySpecifier)[];
export type TaskReactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TaskResponseKeySpecifier)[];
export type TaskResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskTechnologyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'level' | 'CreatedBy' | 'Technology' | 'Task' | TaskTechnologyKeySpecifier)[];
export type TaskTechnologyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskTechnologyResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TaskTechnologyResponseKeySpecifier)[];
export type TaskTechnologyResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'components' | 'site_url' | 'level1hours' | 'level2hours' | 'level3hours' | 'level4hours' | 'level5hours' | 'CreatedBy' | 'UserTechnologies' | 'LearnStrategyStages' | TechnologyKeySpecifier)[];
export type TechnologyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	site_url?: FieldPolicy<any> | FieldReadFunction<any>,
	level1hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level2hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level3hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level4hours?: FieldPolicy<any> | FieldReadFunction<any>,
	level5hours?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	UserTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategyStages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'stopedAt' | 'CreatedBy' | 'Task' | TimerKeySpecifier)[];
export type TimerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	stopedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TimerResponseKeySpecifier)[];
export type TimerResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'email' | 'username' | 'sudo' | 'showEmail' | 'showFullname' | 'image' | 'showPhone' | 'active' | 'blocked' | 'activated' | 'deleted' | 'hasEmail' | 'hasPhone' | 'phone' | 'fullname' | 'address' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'isMentor' | 'about' | 'telegram' | 'technologyLevel' | 'CodeChallengeCompletions' | 'EthAccounts' | 'Timers' | 'NotificationTypes' | 'UserTechnologies' | 'ProjectsCreated' | 'Projects' | 'MentorMenteeMentors' | 'MentorMenteeMentees' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showFullname?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	showPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	blocked?: FieldPolicy<any> | FieldReadFunction<any>,
	activated?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptChatMessageAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptNewChatRoomAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptNewChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	isMentor?: FieldPolicy<any> | FieldReadFunction<any>,
	about?: FieldPolicy<any> | FieldReadFunction<any>,
	telegram?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
	EthAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	Timers?: FieldPolicy<any> | FieldReadFunction<any>,
	NotificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	UserTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	MentorMenteeMentors?: FieldPolicy<any> | FieldReadFunction<any>,
	MentorMenteeMentees?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLearnStrategyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'createdById' | 'CreatedBy' | 'learnStrategyId' | 'LearnStrategy' | UserLearnStrategyKeySpecifier)[];
export type UserLearnStrategyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	createdById?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	learnStrategyId?: FieldPolicy<any> | FieldReadFunction<any>,
	LearnStrategy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | UserResponseKeySpecifier)[];
export type UserResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | 'hiring_status' | 'level' | 'isMentor' | 'CreatedBy' | 'technologyId' | 'Technology' | UserTechnologyKeySpecifier)[];
export type UserTechnologyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	date_from?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	hiring_status?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	isMentor?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyId?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | UserTechnologyResponseKeySpecifier)[];
export type UserTechnologyResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	ChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageKeySpecifier | (() => undefined | ChatMessageKeySpecifier),
		fields?: ChatMessageFieldPolicy,
	},
	ChatMessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageResponseKeySpecifier | (() => undefined | ChatMessageResponseKeySpecifier),
		fields?: ChatMessageResponseFieldPolicy,
	},
	ChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomKeySpecifier | (() => undefined | ChatRoomKeySpecifier),
		fields?: ChatRoomFieldPolicy,
	},
	ChatRoomInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationKeySpecifier | (() => undefined | ChatRoomInvitationKeySpecifier),
		fields?: ChatRoomInvitationFieldPolicy,
	},
	CodeChallenge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeKeySpecifier | (() => undefined | CodeChallengeKeySpecifier),
		fields?: CodeChallengeFieldPolicy,
	},
	CodeChallengeBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockKeySpecifier | (() => undefined | CodeChallengeBlockKeySpecifier),
		fields?: CodeChallengeBlockFieldPolicy,
	},
	CodeChallengeCompletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionKeySpecifier | (() => undefined | CodeChallengeCompletionKeySpecifier),
		fields?: CodeChallengeCompletionFieldPolicy,
	},
	CodeChallengeCompletionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionResponseKeySpecifier | (() => undefined | CodeChallengeCompletionResponseKeySpecifier),
		fields?: CodeChallengeCompletionResponseFieldPolicy,
	},
	Donate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DonateKeySpecifier | (() => undefined | DonateKeySpecifier),
		fields?: DonateFieldPolicy,
	},
	EthAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountKeySpecifier | (() => undefined | EthAccountKeySpecifier),
		fields?: EthAccountFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	LearnStrategy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LearnStrategyKeySpecifier | (() => undefined | LearnStrategyKeySpecifier),
		fields?: LearnStrategyFieldPolicy,
	},
	LearnStrategyStage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LearnStrategyStageKeySpecifier | (() => undefined | LearnStrategyStageKeySpecifier),
		fields?: LearnStrategyStageFieldPolicy,
	},
	MentorMentee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MentorMenteeKeySpecifier | (() => undefined | MentorMenteeKeySpecifier),
		fields?: MentorMenteeFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Notice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeKeySpecifier | (() => undefined | NoticeKeySpecifier),
		fields?: NoticeFieldPolicy,
	},
	NotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeKeySpecifier | (() => undefined | NotificationTypeKeySpecifier),
		fields?: NotificationTypeFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberKeySpecifier | (() => undefined | ProjectMemberKeySpecifier),
		fields?: ProjectMemberFieldPolicy,
	},
	ProjectResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectResponseKeySpecifier | (() => undefined | ProjectResponseKeySpecifier),
		fields?: ProjectResponseFieldPolicy,
	},
	ProjectTask?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskKeySpecifier | (() => undefined | ProjectTaskKeySpecifier),
		fields?: ProjectTaskFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RequestError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestErrorKeySpecifier | (() => undefined | RequestErrorKeySpecifier),
		fields?: RequestErrorFieldPolicy,
	},
	ResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordKeySpecifier | (() => undefined | ResetPasswordKeySpecifier),
		fields?: ResetPasswordFieldPolicy,
	},
	ResetPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		fields?: ResetPasswordResponseFieldPolicy,
	},
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	ResourceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceResponseKeySpecifier | (() => undefined | ResourceResponseKeySpecifier),
		fields?: ResourceResponseFieldPolicy,
	},
	ResourceTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagKeySpecifier | (() => undefined | ResourceTagKeySpecifier),
		fields?: ResourceTagFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	Task?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskKeySpecifier | (() => undefined | TaskKeySpecifier),
		fields?: TaskFieldPolicy,
	},
	TaskReaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionKeySpecifier | (() => undefined | TaskReactionKeySpecifier),
		fields?: TaskReactionFieldPolicy,
	},
	TaskResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskResponseKeySpecifier | (() => undefined | TaskResponseKeySpecifier),
		fields?: TaskResponseFieldPolicy,
	},
	TaskTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskTechnologyKeySpecifier | (() => undefined | TaskTechnologyKeySpecifier),
		fields?: TaskTechnologyFieldPolicy,
	},
	TaskTechnologyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskTechnologyResponseKeySpecifier | (() => undefined | TaskTechnologyResponseKeySpecifier),
		fields?: TaskTechnologyResponseFieldPolicy,
	},
	Technology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyKeySpecifier | (() => undefined | TechnologyKeySpecifier),
		fields?: TechnologyFieldPolicy,
	},
	Timer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerKeySpecifier | (() => undefined | TimerKeySpecifier),
		fields?: TimerFieldPolicy,
	},
	TimerResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerResponseKeySpecifier | (() => undefined | TimerResponseKeySpecifier),
		fields?: TimerResponseFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserLearnStrategy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserLearnStrategyKeySpecifier | (() => undefined | UserLearnStrategyKeySpecifier),
		fields?: UserLearnStrategyFieldPolicy,
	},
	UserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserResponseKeySpecifier | (() => undefined | UserResponseKeySpecifier),
		fields?: UserResponseFieldPolicy,
	},
	UserTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyKeySpecifier | (() => undefined | UserTechnologyKeySpecifier),
		fields?: UserTechnologyFieldPolicy,
	},
	UserTechnologyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyResponseKeySpecifier | (() => undefined | UserTechnologyResponseKeySpecifier),
		fields?: UserTechnologyResponseFieldPolicy,
	}
};