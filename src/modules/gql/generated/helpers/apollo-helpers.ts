import { FieldPolicy, FieldReadFunction, TypePolicies } from '@apollo/client/cache';
export type QueryKeySpecifier = ('apiSchema' | 'galleries' | 'userGroups' | 'worlds' | 'notices' | 'notificationTypes' | 'resourceTags' | 'tags' | 'votes' | 'chatRooms' | 'games' | 'gameResults' | 'tournaments' | 'tournamentGroups' | 'tourneys' | 'ethAccounts' | 'ethContractSources' | 'ethTransactions' | 'callRequests' | 'positions' | 'projectMembers' | 'services' | 'tasks' | 'taskReactions' | 'teamMembers' | 'timers' | 'routes' | 'codeChallenges' | 'codeChallengeBlocks' | 'comments' | 'technologyLessons' | 'careers' | 'technologyLessonUsers' | 'userTechnologies' | 'tests' | 'technologies' | 'ethBlocks' | 'teams' | 'projects' | 'templates' | 'resources' | 'chatMessages' | 'users' | 'gallery' | 'world' | 'notice' | 'notificationType' | 'resourceTag' | 'tag' | 'vote' | 'chatRoom' | 'game' | 'gameResult' | 'tournament' | 'tournamentGroup' | 'tourney' | 'ethAccount' | 'ethContractSource' | 'ethTransaction' | 'position' | 'projectMember' | 'service' | 'task' | 'taskReaction' | 'teamMember' | 'timer' | 'route' | 'codeChallenge' | 'codeChallengeBlock' | 'comment' | 'technologyLesson' | 'career' | 'technologyLessonUser' | 'userTechnology' | 'test' | 'file' | 'technology' | 'ethBlock' | 'team' | 'project' | 'template' | 'resource' | 'chatMessage' | 'user' | 'galleriesConnection' | 'worldsConnection' | 'noticesConnection' | 'notificationTypesConnection' | 'resourceTagsConnection' | 'tagsConnection' | 'votesConnection' | 'chatRoomsConnection' | 'gamesConnection' | 'gameResultsConnection' | 'tournamentsConnection' | 'tournamentGroupsConnection' | 'tourneysConnection' | 'ethAccountsConnection' | 'ethContractSourcesConnection' | 'ethTransactionsConnection' | 'callRequestsConnection' | 'positionsConnection' | 'projectMembersConnection' | 'servicesConnection' | 'tasksConnection' | 'taskReactionsConnection' | 'teamMembersConnection' | 'timersConnection' | 'routesConnection' | 'codeChallengesConnection' | 'codeChallengeBlocksConnection' | 'commentsConnection' | 'technologyLessonsConnection' | 'careersConnection' | 'technologyLessonUsersConnection' | 'userTechnologiesConnection' | 'testsConnection' | 'technologiesConnection' | 'ethBlocksConnection' | 'teamsConnection' | 'projectsConnection' | 'templatesConnection' | 'resourcesConnection' | 'chatMessagesConnection' | 'usersConnection' | 'myWorlds' | 'me' | 'ethNet' | 'ethCoinbase' | 'ethPersonalAccounts' | 'ethBalance' | 'ethTransactionCount' | 'ethSyncState' | 'ethGetBlockNumber' | 'ethGetBlock' | 'ethGetBlockTransactionCount' | 'ethGetTransaction' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	apiSchema?: FieldPolicy<any> | FieldReadFunction<any>,
	galleries?: FieldPolicy<any> | FieldReadFunction<any>,
	userGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	worlds?: FieldPolicy<any> | FieldReadFunction<any>,
	notices?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceTags?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	votes?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRooms?: FieldPolicy<any> | FieldReadFunction<any>,
	games?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResults?: FieldPolicy<any> | FieldReadFunction<any>,
	tournaments?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	tourneys?: FieldPolicy<any> | FieldReadFunction<any>,
	ethAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	ethContractSources?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	projectMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	services?: FieldPolicy<any> | FieldReadFunction<any>,
	tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	taskReactions?: FieldPolicy<any> | FieldReadFunction<any>,
	teamMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	timers?: FieldPolicy<any> | FieldReadFunction<any>,
	routes?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenges?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLessons?: FieldPolicy<any> | FieldReadFunction<any>,
	careers?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLessonUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnologies?: FieldPolicy<any> | FieldReadFunction<any>,
	tests?: FieldPolicy<any> | FieldReadFunction<any>,
	technologies?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	resources?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	world?: FieldPolicy<any> | FieldReadFunction<any>,
	notice?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationType?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceTag?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	vote?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResult?: FieldPolicy<any> | FieldReadFunction<any>,
	tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	ethAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	ethContractSource?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	projectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	service?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	taskReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	teamMember?: FieldPolicy<any> | FieldReadFunction<any>,
	timer?: FieldPolicy<any> | FieldReadFunction<any>,
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLesson?: FieldPolicy<any> | FieldReadFunction<any>,
	career?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLessonUser?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	test?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	technology?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	galleriesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	worldsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	noticesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationTypesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	resourceTagsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tagsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	votesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoomsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	gamesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResultsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroupsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tourneysConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethAccountsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethContractSourcesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransactionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequestsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	positionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	projectMembersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	servicesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	tasksConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	taskReactionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	teamMembersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	timersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	routesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlocksConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLessonsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	careersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLessonUsersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnologiesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	testsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	technologiesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBlocksConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	teamsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	projectsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	templatesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	resourcesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessagesConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	usersConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	myWorlds?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	ethNet?: FieldPolicy<any> | FieldReadFunction<any>,
	ethCoinbase?: FieldPolicy<any> | FieldReadFunction<any>,
	ethPersonalAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	ethBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransactionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	ethSyncState?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetBlockNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetBlockTransactionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	ethGetTransaction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GalleryKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'Files' | 'CreatedBy' | 'Resource' | GalleryKeySpecifier)[];
export type GalleryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	Files?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'rank' | 'Gallery' | 'CreatedBy' | 'ImageResource' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	Gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	ImageResource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'password' | 'fullname' | 'image' | 'address' | 'sudo' | 'active' | 'activated' | 'deleted' | 'Groups' | 'CreatedUsers' | 'CreatedBy' | 'LogedIns' | 'Resources' | 'Votes' | 'NotificationTypes' | 'NotificationTypesCreated' | 'Tags' | 'ResourceTags' | 'EthContractSourcesCreated' | 'EthAccounts' | 'Teams' | 'TeamsCreated' | 'Projects' | 'ProjectsCreated' | 'Tasks' | 'Timers' | 'PrismaProjects' | 'hasEmail' | 'hasPhone' | 'marketplaceToken' | 'hidden' | 'EthAccountAuthed' | 'worlds' | 'settings' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	activated?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	Groups?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	LogedIns?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	Votes?: FieldPolicy<any> | FieldReadFunction<any>,
	NotificationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	NotificationTypesCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>,
	ResourceTags?: FieldPolicy<any> | FieldReadFunction<any>,
	EthContractSourcesCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	EthAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams?: FieldPolicy<any> | FieldReadFunction<any>,
	TeamsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectsCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	Tasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Timers?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplaceToken?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	EthAccountAuthed?: FieldPolicy<any> | FieldReadFunction<any>,
	worlds?: FieldPolicy<any> | FieldReadFunction<any>,
	settings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'Users' | UserGroupKeySpecifier)[];
export type UserGroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInKeySpecifier = ('id' | 'createdAt' | 'fake' | 'User' | 'updatedAt' | LogedInKeySpecifier)[];
export type LogedInFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fake?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'components' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'CreatedBy' | 'Parent' | 'Childs' | 'Image' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'CommentTarget' | 'Topic' | 'Comments' | 'Votes' | 'Tags' | 'oldID' | 'commentOldID' | 'Topics' | 'Blog' | 'Service' | 'Project' | 'Team' | 'class_key' | 'template' | 'mockUpdate' | 'Galleries' | ResourceKeySpecifier)[];
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
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	isfolder?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	Image?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	positiveVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	negativeVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	neutralVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	CommentTarget?: FieldPolicy<any> | FieldReadFunction<any>,
	Topic?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>,
	Votes?: FieldPolicy<any> | FieldReadFunction<any>,
	Tags?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	commentOldID?: FieldPolicy<any> | FieldReadFunction<any>,
	Topics?: FieldPolicy<any> | FieldReadFunction<any>,
	Blog?: FieldPolicy<any> | FieldReadFunction<any>,
	Service?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	class_key?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	mockUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	Galleries?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'Resource' | 'User' | 'value' | VoteKeySpecifier)[];
export type VoteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | 'Resource' | 'Tag' | 'CreatedBy' | ResourceTagKeySpecifier)[];
export type ResourceTagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	Tag?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'Resources' | 'CreatedBy' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'code' | 'CreatedBy' | 'Projects' | 'Parent' | 'Childs' | 'rank' | 'Category' | 'oldID' | 'Resource' | ServiceKeySpecifier)[];
export type ServiceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	Category?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'Project' | 'User' | 'Services' | 'status' | ProjectMemberKeySpecifier)[];
export type ProjectMemberFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Services?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('id' | 'name' | 'domain' | 'PrismaTemplates' | 'PrismaUsers' | 'PrismaResources' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'Members' | 'CreatedBy' | 'ProjectTasks' | 'Team' | 'Customers' | 'ChatRoom' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'Image' | 'Resource' | 'EthAccounts' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaResources?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectTasks?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	Customers?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	Image?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>,
	EthAccounts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | 'Parent' | 'CreatedBy' | 'Project' | 'PrismaProject' | TemplateKeySpecifier)[];
export type TemplateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	props?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	vars?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	PrismaProject?: FieldPolicy<any> | FieldReadFunction<any>
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
export type TaskKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'TaskProjects' | 'CreatedBy' | 'Members' | 'Parent' | 'Childs' | 'RelatedFrom' | 'RelatedTo' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'Timers' | 'Reactions' | 'ChatRoom' | TaskKeySpecifier)[];
export type TaskFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	TaskProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	RelatedFrom?: FieldPolicy<any> | FieldReadFunction<any>,
	RelatedTo?: FieldPolicy<any> | FieldReadFunction<any>,
	startDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	endDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	Timers?: FieldPolicy<any> | FieldReadFunction<any>,
	Reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskMemberKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'Task' | 'User' | 'status' | TaskMemberKeySpecifier)[];
export type TaskMemberFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
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
export type TaskReactionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'Task' | 'type' | TaskReactionKeySpecifier)[];
export type TaskReactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'Members' | 'CreatedBy' | 'Messages' | 'isPublic' | 'allowAnonymous' | 'sandbox' | 'Invitations' | 'CallRequests' | 'Task' | 'Project' | ChatRoomKeySpecifier)[];
export type ChatRoomFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Messages?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	allowAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	sandbox?: FieldPolicy<any> | FieldReadFunction<any>,
	Invitations?: FieldPolicy<any> | FieldReadFunction<any>,
	CallRequests?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | 'CreatedBy' | 'Room' | 'ReadedBy' | ChatMessageKeySpecifier)[];
export type ChatMessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Room?: FieldPolicy<any> | FieldReadFunction<any>,
	ReadedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedKeySpecifier = ('id' | 'createdAt' | 'Message' | 'User' | 'updatedAt' | ChatMessageReadedKeySpecifier)[];
export type ChatMessageReadedFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Message?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'User' | 'ChatRoom' | 'Notice' | ChatRoomInvitationKeySpecifier)[];
export type ChatRoomInvitationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	Notice?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | 'User' | 'CreatedBy' | 'ChatMessage' | 'ChatRoomInvitation' | NoticeKeySpecifier)[];
export type NoticeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	ChatRoomInvitation?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | 'Called' | 'Caller' | 'Room' | CallRequestKeySpecifier)[];
export type CallRequestFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	called_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	caller_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Called?: FieldPolicy<any> | FieldReadFunction<any>,
	Caller?: FieldPolicy<any> | FieldReadFunction<any>,
	Room?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'Parent' | 'Childs' | 'CreatedBy' | 'Members' | 'Projects' | 'OrderedProjects' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | 'Resource' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	OrderedProjects?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	Resource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'Team' | 'User' | 'CreatedBy' | 'status' | TeamMemberKeySpecifier)[];
export type TeamMemberFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'CreatedBy' | 'Transaction' | 'IncomeTransactions' | 'OutcomeTransactions' | 'source' | 'bytecode' | 'abi' | 'ContractSource' | 'BlocksMined' | 'UserAuthed' | 'Project' | 'Resources' | 'balance' | EthAccountKeySpecifier)[];
export type EthAccountFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	IncomeTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	OutcomeTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	bytecode?: FieldPolicy<any> | FieldReadFunction<any>,
	abi?: FieldPolicy<any> | FieldReadFunction<any>,
	ContractSource?: FieldPolicy<any> | FieldReadFunction<any>,
	BlocksMined?: FieldPolicy<any> | FieldReadFunction<any>,
	UserAuthed?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	Resources?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'Sender' | 'Receiver' | 'Account' | 'address' | 'type' | 'v' | 'r' | 's' | 'Block' | EthTransactionKeySpecifier)[];
export type EthTransactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	input?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	Sender?: FieldPolicy<any> | FieldReadFunction<any>,
	Receiver?: FieldPolicy<any> | FieldReadFunction<any>,
	Account?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	v?: FieldPolicy<any> | FieldReadFunction<any>,
	r?: FieldPolicy<any> | FieldReadFunction<any>,
	s?: FieldPolicy<any> | FieldReadFunction<any>,
	Block?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'Miner' | 'Transactions' | 'transactionsRoot' | 'transactions_count' | 'Uncles' | EthBlockKeySpecifier)[];
export type EthBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	difficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDifficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	extraData?: FieldPolicy<any> | FieldReadFunction<any>,
	gasLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	gasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	mixHash?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	parentHash?: FieldPolicy<any> | FieldReadFunction<any>,
	receiptsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	sha3Uncles?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	stateRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	Miner?: FieldPolicy<any> | FieldReadFunction<any>,
	Transactions?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_count?: FieldPolicy<any> | FieldReadFunction<any>,
	Uncles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | 'CreatedBy' | 'Accounts' | EthContractSourceKeySpecifier)[];
export type EthContractSourceFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Accounts?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceCategoryKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'code' | 'CreatedBy' | 'Services' | 'Parent' | 'Childs' | ServiceCategoryKeySpecifier)[];
export type ServiceCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Services?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'Users' | 'CreatedBy' | 'oldID' | NotificationTypeKeySpecifier)[];
export type NotificationTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorldKeySpecifier = ('createdAt' | 'updatedAt' | 'CreatedBy' | 'id' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | 'changedBlocks' | 'players' | 'messages' | WorldKeySpecifier)[];
export type WorldFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seed?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	timeChanger?: FieldPolicy<any> | FieldReadFunction<any>,
	days?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPlayed?: FieldPolicy<any> | FieldReadFunction<any>,
	changedBlocks?: FieldPolicy<any> | FieldReadFunction<any>,
	players?: FieldPolicy<any> | FieldReadFunction<any>,
	messages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlockKeySpecifier = ('id' | 'representation' | 'type' | 'world' | 'x' | 'y' | 'z' | BlockKeySpecifier)[];
export type BlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	representation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	world?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>,
	z?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerKeySpecifier = ('createdAt' | 'updatedAt' | 'id' | 'isAdmin' | 'gamemode' | 'user' | 'world' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | 'inventory' | PlayerKeySpecifier)[];
export type PlayerFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	gamemode?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	world?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>,
	z?: FieldPolicy<any> | FieldReadFunction<any>,
	dirx?: FieldPolicy<any> | FieldReadFunction<any>,
	diry?: FieldPolicy<any> | FieldReadFunction<any>,
	inventory?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InventoryKeySpecifier = ('id' | 'player' | 'cursor' | 'data' | InventoryKeySpecifier)[];
export type InventoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('id' | 'world' | 'type' | 'sender' | 'body' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	world?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsKeySpecifier = ('id' | 'renderDistance' | 'User' | SettingsKeySpecifier)[];
export type SettingsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	renderDistance?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | 'CreatedBy' | 'Tourney' | 'Users' | 'Teams' | 'Parent' | 'Childs' | 'Results' | GameKeySpecifier)[];
export type GameFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	Teams?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	Results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | 'CreatedBy' | 'Tournament' | 'Players' | 'Games' | TourneyKeySpecifier)[];
export type TourneyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	Players?: FieldPolicy<any> | FieldReadFunction<any>,
	Games?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Tourneys' | 'Group' | TournamentKeySpecifier)[];
export type TournamentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tourneys?: FieldPolicy<any> | FieldReadFunction<any>,
	Group?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'CreatedBy' | 'Tournaments' | TournamentGroupKeySpecifier)[];
export type TournamentGroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Tournaments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPlayerKeySpecifier = ('id' | 'Tourney' | 'User' | TourneyPlayerKeySpecifier)[];
export type TourneyPlayerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	Tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'CreatedBy' | 'User' | 'Team' | 'Game' | 'value' | GameResultKeySpecifier)[];
export type GameResultFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	Team?: FieldPolicy<any> | FieldReadFunction<any>,
	Game?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'code' | 'name' | 'CreatedBy' | 'Users' | PositionKeySpecifier)[];
export type PositionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteKeySpecifier = ('id' | 'name' | 'path' | 'exact' | 'component' | 'Parent' | 'Childs' | 'CreatedBy' | RouteKeySpecifier)[];
export type RouteFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	exact?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Childs?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeKeySpecifier = ('id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'CreatedBy' | 'rank' | 'Block' | CodeChallengeKeySpecifier)[];
export type CodeChallengeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	dashedName?: FieldPolicy<any> | FieldReadFunction<any>,
	localeTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeType?: FieldPolicy<any> | FieldReadFunction<any>,
	forumTopicId?: FieldPolicy<any> | FieldReadFunction<any>,
	translations?: FieldPolicy<any> | FieldReadFunction<any>,
	tests?: FieldPolicy<any> | FieldReadFunction<any>,
	solutions?: FieldPolicy<any> | FieldReadFunction<any>,
	instructions?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	videoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	superOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isBeta?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	Block?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockKeySpecifier = ('id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | 'Parent' | 'Children' | 'CreatedBy' | 'Challenges' | CodeChallengeBlockKeySpecifier)[];
export type CodeChallengeBlockFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	Parent?: FieldPolicy<any> | FieldReadFunction<any>,
	Children?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Challenges?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | 'CreatedBy' | 'TechnologyLesson' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	TechnologyLesson?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonKeySpecifier = ('id' | 'name' | 'components' | 'contentText' | 'Technology' | 'CreatedBy' | 'Users' | 'Comments' | TechnologyLessonKeySpecifier)[];
export type TechnologyLessonFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Users?: FieldPolicy<any> | FieldReadFunction<any>,
	Comments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'components' | 'contentText' | 'site_url' | 'CreatedBy' | 'UserTechnologies' | TechnologyKeySpecifier)[];
export type TechnologyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	site_url?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	UserTechnologies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'Technology' | 'components' | 'date_from' | 'date_till' | 'status' | UserTechnologyKeySpecifier)[];
export type UserTechnologyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Technology?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	date_from?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonUserKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'Lesson' | 'CreatedBy' | 'status' | 'completedAt' | TechnologyLessonUserKeySpecifier)[];
export type TechnologyLessonUserFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	Lesson?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'name' | 'description' | 'start_date' | CareerKeySpecifier)[];
export type CareerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'text' | 'quantity' | 'date' | 'CreatedBy' | TestKeySpecifier)[];
export type TestFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GalleryConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | GalleryConnectionKeySpecifier)[];
export type GalleryConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GalleryEdgeKeySpecifier = ('node' | 'cursor' | GalleryEdgeKeySpecifier)[];
export type GalleryEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateGalleryKeySpecifier = ('count' | AggregateGalleryKeySpecifier)[];
export type AggregateGalleryFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorldConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | WorldConnectionKeySpecifier)[];
export type WorldConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorldEdgeKeySpecifier = ('node' | 'cursor' | WorldEdgeKeySpecifier)[];
export type WorldEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateWorldKeySpecifier = ('count' | AggregateWorldKeySpecifier)[];
export type AggregateWorldFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | NoticeConnectionKeySpecifier)[];
export type NoticeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeEdgeKeySpecifier = ('node' | 'cursor' | NoticeEdgeKeySpecifier)[];
export type NoticeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNoticeKeySpecifier = ('count' | AggregateNoticeKeySpecifier)[];
export type AggregateNoticeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | NotificationTypeConnectionKeySpecifier)[];
export type NotificationTypeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeEdgeKeySpecifier = ('node' | 'cursor' | NotificationTypeEdgeKeySpecifier)[];
export type NotificationTypeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateNotificationTypeKeySpecifier = ('count' | AggregateNotificationTypeKeySpecifier)[];
export type AggregateNotificationTypeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ResourceTagConnectionKeySpecifier)[];
export type ResourceTagConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagEdgeKeySpecifier = ('node' | 'cursor' | ResourceTagEdgeKeySpecifier)[];
export type ResourceTagEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateResourceTagKeySpecifier = ('count' | AggregateResourceTagKeySpecifier)[];
export type AggregateResourceTagFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TagConnectionKeySpecifier)[];
export type TagConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagEdgeKeySpecifier = ('node' | 'cursor' | TagEdgeKeySpecifier)[];
export type TagEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTagKeySpecifier = ('count' | AggregateTagKeySpecifier)[];
export type AggregateTagFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | VoteConnectionKeySpecifier)[];
export type VoteConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteEdgeKeySpecifier = ('node' | 'cursor' | VoteEdgeKeySpecifier)[];
export type VoteEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateVoteKeySpecifier = ('count' | AggregateVoteKeySpecifier)[];
export type AggregateVoteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatRoomConnectionKeySpecifier)[];
export type ChatRoomConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomEdgeKeySpecifier = ('node' | 'cursor' | ChatRoomEdgeKeySpecifier)[];
export type ChatRoomEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatRoomKeySpecifier = ('count' | AggregateChatRoomKeySpecifier)[];
export type AggregateChatRoomFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | GameConnectionKeySpecifier)[];
export type GameConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameEdgeKeySpecifier = ('node' | 'cursor' | GameEdgeKeySpecifier)[];
export type GameEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateGameKeySpecifier = ('count' | AggregateGameKeySpecifier)[];
export type AggregateGameFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | GameResultConnectionKeySpecifier)[];
export type GameResultConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultEdgeKeySpecifier = ('node' | 'cursor' | GameResultEdgeKeySpecifier)[];
export type GameResultEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateGameResultKeySpecifier = ('count' | AggregateGameResultKeySpecifier)[];
export type AggregateGameResultFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TournamentConnectionKeySpecifier)[];
export type TournamentConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentEdgeKeySpecifier = ('node' | 'cursor' | TournamentEdgeKeySpecifier)[];
export type TournamentEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTournamentKeySpecifier = ('count' | AggregateTournamentKeySpecifier)[];
export type AggregateTournamentFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TournamentGroupConnectionKeySpecifier)[];
export type TournamentGroupConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupEdgeKeySpecifier = ('node' | 'cursor' | TournamentGroupEdgeKeySpecifier)[];
export type TournamentGroupEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTournamentGroupKeySpecifier = ('count' | AggregateTournamentGroupKeySpecifier)[];
export type AggregateTournamentGroupFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TourneyConnectionKeySpecifier)[];
export type TourneyConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyEdgeKeySpecifier = ('node' | 'cursor' | TourneyEdgeKeySpecifier)[];
export type TourneyEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTourneyKeySpecifier = ('count' | AggregateTourneyKeySpecifier)[];
export type AggregateTourneyFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthAccountConnectionKeySpecifier)[];
export type EthAccountConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountEdgeKeySpecifier = ('node' | 'cursor' | EthAccountEdgeKeySpecifier)[];
export type EthAccountEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthAccountKeySpecifier = ('count' | AggregateEthAccountKeySpecifier)[];
export type AggregateEthAccountFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthContractSourceConnectionKeySpecifier)[];
export type EthContractSourceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceEdgeKeySpecifier = ('node' | 'cursor' | EthContractSourceEdgeKeySpecifier)[];
export type EthContractSourceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthContractSourceKeySpecifier = ('count' | AggregateEthContractSourceKeySpecifier)[];
export type AggregateEthContractSourceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthTransactionConnectionKeySpecifier)[];
export type EthTransactionConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionEdgeKeySpecifier = ('node' | 'cursor' | EthTransactionEdgeKeySpecifier)[];
export type EthTransactionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthTransactionKeySpecifier = ('count' | AggregateEthTransactionKeySpecifier)[];
export type AggregateEthTransactionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CallRequestConnectionKeySpecifier)[];
export type CallRequestConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestEdgeKeySpecifier = ('node' | 'cursor' | CallRequestEdgeKeySpecifier)[];
export type CallRequestEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCallRequestKeySpecifier = ('count' | AggregateCallRequestKeySpecifier)[];
export type AggregateCallRequestFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PositionConnectionKeySpecifier)[];
export type PositionConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionEdgeKeySpecifier = ('node' | 'cursor' | PositionEdgeKeySpecifier)[];
export type PositionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregatePositionKeySpecifier = ('count' | AggregatePositionKeySpecifier)[];
export type AggregatePositionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ProjectMemberConnectionKeySpecifier)[];
export type ProjectMemberConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberEdgeKeySpecifier = ('node' | 'cursor' | ProjectMemberEdgeKeySpecifier)[];
export type ProjectMemberEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateProjectMemberKeySpecifier = ('count' | AggregateProjectMemberKeySpecifier)[];
export type AggregateProjectMemberFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ServiceConnectionKeySpecifier)[];
export type ServiceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceEdgeKeySpecifier = ('node' | 'cursor' | ServiceEdgeKeySpecifier)[];
export type ServiceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateServiceKeySpecifier = ('count' | AggregateServiceKeySpecifier)[];
export type AggregateServiceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TaskConnectionKeySpecifier)[];
export type TaskConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskEdgeKeySpecifier = ('node' | 'cursor' | TaskEdgeKeySpecifier)[];
export type TaskEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTaskKeySpecifier = ('count' | AggregateTaskKeySpecifier)[];
export type AggregateTaskFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TaskReactionConnectionKeySpecifier)[];
export type TaskReactionConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionEdgeKeySpecifier = ('node' | 'cursor' | TaskReactionEdgeKeySpecifier)[];
export type TaskReactionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTaskReactionKeySpecifier = ('count' | AggregateTaskReactionKeySpecifier)[];
export type AggregateTaskReactionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TeamMemberConnectionKeySpecifier)[];
export type TeamMemberConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberEdgeKeySpecifier = ('node' | 'cursor' | TeamMemberEdgeKeySpecifier)[];
export type TeamMemberEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTeamMemberKeySpecifier = ('count' | AggregateTeamMemberKeySpecifier)[];
export type AggregateTeamMemberFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TimerConnectionKeySpecifier)[];
export type TimerConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerEdgeKeySpecifier = ('node' | 'cursor' | TimerEdgeKeySpecifier)[];
export type TimerEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTimerKeySpecifier = ('count' | AggregateTimerKeySpecifier)[];
export type AggregateTimerFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | RouteConnectionKeySpecifier)[];
export type RouteConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteEdgeKeySpecifier = ('node' | 'cursor' | RouteEdgeKeySpecifier)[];
export type RouteEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateRouteKeySpecifier = ('count' | AggregateRouteKeySpecifier)[];
export type AggregateRouteFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CodeChallengeConnectionKeySpecifier)[];
export type CodeChallengeConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeEdgeKeySpecifier = ('node' | 'cursor' | CodeChallengeEdgeKeySpecifier)[];
export type CodeChallengeEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCodeChallengeKeySpecifier = ('count' | AggregateCodeChallengeKeySpecifier)[];
export type AggregateCodeChallengeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CodeChallengeBlockConnectionKeySpecifier)[];
export type CodeChallengeBlockConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockEdgeKeySpecifier = ('node' | 'cursor' | CodeChallengeBlockEdgeKeySpecifier)[];
export type CodeChallengeBlockEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCodeChallengeBlockKeySpecifier = ('count' | AggregateCodeChallengeBlockKeySpecifier)[];
export type AggregateCodeChallengeBlockFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('node' | 'cursor' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCommentKeySpecifier = ('count' | AggregateCommentKeySpecifier)[];
export type AggregateCommentFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TechnologyLessonConnectionKeySpecifier)[];
export type TechnologyLessonConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonEdgeKeySpecifier = ('node' | 'cursor' | TechnologyLessonEdgeKeySpecifier)[];
export type TechnologyLessonEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTechnologyLessonKeySpecifier = ('count' | AggregateTechnologyLessonKeySpecifier)[];
export type AggregateTechnologyLessonFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CareerConnectionKeySpecifier)[];
export type CareerConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerEdgeKeySpecifier = ('node' | 'cursor' | CareerEdgeKeySpecifier)[];
export type CareerEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCareerKeySpecifier = ('count' | AggregateCareerKeySpecifier)[];
export type AggregateCareerFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonUserConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TechnologyLessonUserConnectionKeySpecifier)[];
export type TechnologyLessonUserConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonUserEdgeKeySpecifier = ('node' | 'cursor' | TechnologyLessonUserEdgeKeySpecifier)[];
export type TechnologyLessonUserEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTechnologyLessonUserKeySpecifier = ('count' | AggregateTechnologyLessonUserKeySpecifier)[];
export type AggregateTechnologyLessonUserFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserTechnologyConnectionKeySpecifier)[];
export type UserTechnologyConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyEdgeKeySpecifier = ('node' | 'cursor' | UserTechnologyEdgeKeySpecifier)[];
export type UserTechnologyEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserTechnologyKeySpecifier = ('count' | AggregateUserTechnologyKeySpecifier)[];
export type AggregateUserTechnologyFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TestConnectionKeySpecifier)[];
export type TestConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestEdgeKeySpecifier = ('node' | 'cursor' | TestEdgeKeySpecifier)[];
export type TestEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTestKeySpecifier = ('count' | AggregateTestKeySpecifier)[];
export type AggregateTestFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TechnologyConnectionKeySpecifier)[];
export type TechnologyConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyEdgeKeySpecifier = ('node' | 'cursor' | TechnologyEdgeKeySpecifier)[];
export type TechnologyEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTechnologyKeySpecifier = ('count' | AggregateTechnologyKeySpecifier)[];
export type AggregateTechnologyFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | EthBlockConnectionKeySpecifier)[];
export type EthBlockConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockEdgeKeySpecifier = ('node' | 'cursor' | EthBlockEdgeKeySpecifier)[];
export type EthBlockEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateEthBlockKeySpecifier = ('count' | AggregateEthBlockKeySpecifier)[];
export type AggregateEthBlockFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TeamConnectionKeySpecifier)[];
export type TeamConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamEdgeKeySpecifier = ('node' | 'cursor' | TeamEdgeKeySpecifier)[];
export type TeamEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTeamKeySpecifier = ('count' | AggregateTeamKeySpecifier)[];
export type AggregateTeamFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ProjectConnectionKeySpecifier)[];
export type ProjectConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectEdgeKeySpecifier = ('node' | 'cursor' | ProjectEdgeKeySpecifier)[];
export type ProjectEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateProjectKeySpecifier = ('count' | AggregateProjectKeySpecifier)[];
export type AggregateProjectFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TemplateConnectionKeySpecifier)[];
export type TemplateConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateEdgeKeySpecifier = ('node' | 'cursor' | TemplateEdgeKeySpecifier)[];
export type TemplateEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTemplateKeySpecifier = ('count' | AggregateTemplateKeySpecifier)[];
export type AggregateTemplateFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ResourceConnectionKeySpecifier)[];
export type ResourceConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceEdgeKeySpecifier = ('node' | 'cursor' | ResourceEdgeKeySpecifier)[];
export type ResourceEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateResourceKeySpecifier = ('count' | AggregateResourceKeySpecifier)[];
export type AggregateResourceFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatMessageConnectionKeySpecifier)[];
export type ChatMessageConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageEdgeKeySpecifier = ('node' | 'cursor' | ChatMessageEdgeKeySpecifier)[];
export type ChatMessageEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatMessageKeySpecifier = ('count' | AggregateChatMessageKeySpecifier)[];
export type AggregateChatMessageFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('node' | 'cursor' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserKeySpecifier = ('count' | AggregateUserKeySpecifier)[];
export type AggregateUserFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ethNetKeySpecifier = ('id' | 'isListening' | 'peerCount' | 'networkType' | ethNetKeySpecifier)[];
export type ethNetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isListening?: FieldPolicy<any> | FieldReadFunction<any>,
	peerCount?: FieldPolicy<any> | FieldReadFunction<any>,
	networkType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthPersonalAccountKeySpecifier = ('address' | 'balance' | EthPersonalAccountKeySpecifier)[];
export type EthPersonalAccountFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ethSyncStateKeySpecifier = ('startingBlock' | 'currentBlock' | 'highestBlock' | 'knownStates' | 'pulledStates' | ethSyncStateKeySpecifier)[];
export type ethSyncStateFieldPolicy = {
	startingBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	currentBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	highestBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	knownStates?: FieldPolicy<any> | FieldReadFunction<any>,
	pulledStates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createBlogProcessor' | 'updateBlogProcessor' | 'createTopicProcessor' | 'updateTopicProcessor' | 'createCommentProcessor' | 'updateCommentProcessor' | 'createTestProcessor' | 'updateTestProcessor' | 'ethSigninOrSignup' | 'ethConnectAuthAccount' | 'fccImportChallengs' | 'createCareerProcessor' | 'updateCareerProcessor' | 'createUserTechnologyProcessor' | 'updateUserTechnologyProcessor' | 'createTechnologyLessonProcessor' | 'updateTechnologyLessonProcessor' | 'createTechnologyProcessor' | 'updateTechnologyProcessor' | 'createTechnologyLessonCommentProcessor' | 'updateTechnologyLessonCommentProcessor' | 'createTechnologyLessonUserProcessor' | 'updateTechnologyLessonUserProcessor' | 'createPlayer' | 'createWorld' | 'createSettings' | 'updatePlayer' | 'updateWorld' | 'updateSettings' | 'updateCallRequest' | 'deleteGallery' | 'deleteWorld' | 'deleteNotice' | 'deleteTaskReaction' | 'deleteTest' | 'deleteTemplate' | 'deleteManyNotices' | 'deleteManyTests' | 'runCommand' | 'login' | 'singleUpload' | 'multipleUpload' | 'signup' | 'signin' | 'updateUserProcessor' | 'resetPasswordProcessor' | 'createResetPasswordProcessor' | 'createTemplateProcessor' | 'updateTemplateProcessor' | 'createGalleryProcessor' | 'updateGalleryProcessor' | 'createChatRoomProcessor' | 'updateChatRoomProcessor' | 'inviteChatRoomProcessor' | 'joinChatRoom' | 'leaveChatRoom' | 'createChatMessageProcessor' | 'updateChatMessageProcessor' | 'markAsReadedChatMessage' | 'createEthAccountProcessor' | 'createEthTransactionProcessor' | 'ethRecoverPersonalSignature' | 'createCallRequestProcessor' | 'createProjectProcessor' | 'updateProjectProcessor' | 'createTaskProcessor' | 'updateTaskProcessor' | 'createTaskReactionProcessor' | 'createTimerProcessor' | 'updateTimerProcessor' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createBlogProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBlogProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopicProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTestProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTestProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	ethSigninOrSignup?: FieldPolicy<any> | FieldReadFunction<any>,
	ethConnectAuthAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	fccImportChallengs?: FieldPolicy<any> | FieldReadFunction<any>,
	createCareerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCareerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechnologyLessonProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTechnologyLessonProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTechnologyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechnologyLessonCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTechnologyLessonCommentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechnologyLessonUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTechnologyLessonUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	createWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	createSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCallRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGallery?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotice?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTaskReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNotices?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyTests?: FieldPolicy<any> | FieldReadFunction<any>,
	runCommand?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplateProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplateProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createGalleryProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGalleryProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatRoomProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateChatRoomProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	inviteChatRoomProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	joinChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	leaveChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateChatMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	markAsReadedChatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createEthAccountProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createEthTransactionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	ethRecoverPersonalSignature?: FieldPolicy<any> | FieldReadFunction<any>,
	createCallRequestProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskReactionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ResourceResponseKeySpecifier)[];
export type ResourceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorKeySpecifier = ('key' | 'message' | ErrorKeySpecifier)[];
export type ErrorFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TestResponseKeySpecifier)[];
export type TestResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthPayloadKeySpecifier = ('success' | 'message' | 'errors' | 'token' | 'data' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthAccountResponseKeySpecifier)[];
export type EthAccountResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CareerResponseKeySpecifier)[];
export type CareerResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | UserTechnologyResponseKeySpecifier)[];
export type UserTechnologyResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TechnologyLessonResponseKeySpecifier)[];
export type TechnologyLessonResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TechnologyResponseKeySpecifier)[];
export type TechnologyResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CommentResponseKeySpecifier)[];
export type CommentResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonUserResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TechnologyLessonUserResponseKeySpecifier)[];
export type TechnologyLessonUserResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchPayloadKeySpecifier = ('count' | BatchPayloadKeySpecifier)[];
export type BatchPayloadFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type McJsAuthPayloadKeySpecifier = ('token' | 'user' | McJsAuthPayloadKeySpecifier)[];
export type McJsAuthPayloadFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | UserResponseKeySpecifier)[];
export type UserResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ResetPasswordResponseKeySpecifier)[];
export type ResetPasswordResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | 'User' | ResetPasswordKeySpecifier)[];
export type ResetPasswordFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	validTill?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TemplateResponseKeySpecifier)[];
export type TemplateResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GalleryResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | GalleryResponseKeySpecifier)[];
export type GalleryResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatRoomResponseKeySpecifier)[];
export type ChatRoomResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatMessageResponseKeySpecifier)[];
export type ChatMessageResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthTransactionResponseKeySpecifier)[];
export type EthTransactionResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CallRequestResponseKeySpecifier)[];
export type CallRequestResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ProjectResponseKeySpecifier)[];
export type ProjectResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TaskResponseKeySpecifier)[];
export type TaskResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TaskReactionResponseKeySpecifier)[];
export type TaskReactionResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TimerResponseKeySpecifier)[];
export type TimerResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('gallery' | 'player' | 'world' | 'message' | 'notice' | 'chatMessageReaded' | 'chatRoom' | 'game' | 'gameResult' | 'tournament' | 'tournamentGroup' | 'tourney' | 'ethTransaction' | 'callRequest' | 'position' | 'projectMember' | 'service' | 'task' | 'taskReaction' | 'teamMember' | 'timer' | 'route' | 'codeChallenge' | 'codeChallengeBlock' | 'comment' | 'technologyLesson' | 'career' | 'technologyLessonUser' | 'userTechnology' | 'technology' | 'team' | 'project' | 'template' | 'resource' | 'chatMessage' | 'user' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	gallery?: FieldPolicy<any> | FieldReadFunction<any>,
	player?: FieldPolicy<any> | FieldReadFunction<any>,
	world?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	notice?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessageReaded?: FieldPolicy<any> | FieldReadFunction<any>,
	chatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	game?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResult?: FieldPolicy<any> | FieldReadFunction<any>,
	tournament?: FieldPolicy<any> | FieldReadFunction<any>,
	tournamentGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	tourney?: FieldPolicy<any> | FieldReadFunction<any>,
	ethTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	projectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	service?: FieldPolicy<any> | FieldReadFunction<any>,
	task?: FieldPolicy<any> | FieldReadFunction<any>,
	taskReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	teamMember?: FieldPolicy<any> | FieldReadFunction<any>,
	timer?: FieldPolicy<any> | FieldReadFunction<any>,
	route?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	codeChallengeBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLesson?: FieldPolicy<any> | FieldReadFunction<any>,
	career?: FieldPolicy<any> | FieldReadFunction<any>,
	technologyLessonUser?: FieldPolicy<any> | FieldReadFunction<any>,
	userTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	technology?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	resource?: FieldPolicy<any> | FieldReadFunction<any>,
	chatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GallerySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | GallerySubscriptionPayloadKeySpecifier)[];
export type GallerySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GalleryPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | GalleryPreviousValuesKeySpecifier)[];
export type GalleryPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | PlayerSubscriptionPayloadKeySpecifier)[];
export type PlayerSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerPreviousValuesKeySpecifier = ('createdAt' | 'updatedAt' | 'id' | 'isAdmin' | 'gamemode' | 'lastLogin' | 'x' | 'y' | 'z' | 'dirx' | 'diry' | PlayerPreviousValuesKeySpecifier)[];
export type PlayerPreviousValuesFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	gamemode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastLogin?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>,
	z?: FieldPolicy<any> | FieldReadFunction<any>,
	dirx?: FieldPolicy<any> | FieldReadFunction<any>,
	diry?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorldSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | WorldSubscriptionPayloadKeySpecifier)[];
export type WorldSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorldPreviousValuesKeySpecifier = ('createdAt' | 'updatedAt' | 'id' | 'name' | 'seed' | 'type' | 'time' | 'timeChanger' | 'days' | 'lastPlayed' | WorldPreviousValuesKeySpecifier)[];
export type WorldPreviousValuesFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	seed?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	timeChanger?: FieldPolicy<any> | FieldReadFunction<any>,
	days?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPlayed?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | MessageSubscriptionPayloadKeySpecifier)[];
export type MessageSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessagePreviousValuesKeySpecifier = ('id' | 'type' | 'sender' | 'body' | MessagePreviousValuesKeySpecifier)[];
export type MessagePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	body?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticeSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | NoticeSubscriptionPayloadKeySpecifier)[];
export type NoticeSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NoticePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | NoticePreviousValuesKeySpecifier)[];
export type NoticePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatMessageReadedSubscriptionPayloadKeySpecifier)[];
export type ChatMessageReadedSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | ChatMessageReadedPreviousValuesKeySpecifier)[];
export type ChatMessageReadedPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatRoomSubscriptionPayloadKeySpecifier)[];
export type ChatRoomSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'image' | 'code' | 'isPublic' | 'allowAnonymous' | 'sandbox' | ChatRoomPreviousValuesKeySpecifier)[];
export type ChatRoomPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublic?: FieldPolicy<any> | FieldReadFunction<any>,
	allowAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	sandbox?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | GameSubscriptionPayloadKeySpecifier)[];
export type GameSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GamePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'start_date' | 'end_date' | 'sequence' | GamePreviousValuesKeySpecifier)[];
export type GamePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | GameResultSubscriptionPayloadKeySpecifier)[];
export type GameResultSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'date' | 'name' | 'value' | GameResultPreviousValuesKeySpecifier)[];
export type GameResultPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TournamentSubscriptionPayloadKeySpecifier)[];
export type TournamentSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | TournamentPreviousValuesKeySpecifier)[];
export type TournamentPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TournamentGroupSubscriptionPayloadKeySpecifier)[];
export type TournamentGroupSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | TournamentGroupPreviousValuesKeySpecifier)[];
export type TournamentGroupPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TourneySubscriptionPayloadKeySpecifier)[];
export type TourneySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'date' | 'date_till' | TourneyPreviousValuesKeySpecifier)[];
export type TourneyPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | EthTransactionSubscriptionPayloadKeySpecifier)[];
export type EthTransactionSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CallRequestSubscriptionPayloadKeySpecifier)[];
export type CallRequestSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CallRequestPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'called_descriptions' | 'caller_descriptions' | 'status' | 'startedAt' | 'endedAt' | CallRequestPreviousValuesKeySpecifier)[];
export type CallRequestPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	called_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	caller_descriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	startedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | PositionSubscriptionPayloadKeySpecifier)[];
export type PositionSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'code' | 'name' | PositionPreviousValuesKeySpecifier)[];
export type PositionPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ProjectMemberSubscriptionPayloadKeySpecifier)[];
export type ProjectMemberSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | ProjectMemberPreviousValuesKeySpecifier)[];
export type ProjectMemberPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ServiceSubscriptionPayloadKeySpecifier)[];
export type ServiceSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServicePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'code' | 'rank' | 'oldID' | ServicePreviousValuesKeySpecifier)[];
export type ServicePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TaskSubscriptionPayloadKeySpecifier)[];
export type TaskSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | TaskPreviousValuesKeySpecifier)[];
export type TaskPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	startDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	endDatePlaning?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	endDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TaskReactionSubscriptionPayloadKeySpecifier)[];
export type TaskReactionSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskReactionPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | TaskReactionPreviousValuesKeySpecifier)[];
export type TaskReactionPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TeamMemberSubscriptionPayloadKeySpecifier)[];
export type TeamMemberSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | TeamMemberPreviousValuesKeySpecifier)[];
export type TeamMemberPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TimerSubscriptionPayloadKeySpecifier)[];
export type TimerSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'stopedAt' | TimerPreviousValuesKeySpecifier)[];
export type TimerPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	stopedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | RouteSubscriptionPayloadKeySpecifier)[];
export type RouteSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoutePreviousValuesKeySpecifier = ('id' | 'name' | 'path' | 'exact' | 'component' | RoutePreviousValuesKeySpecifier)[];
export type RoutePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	exact?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CodeChallengeSubscriptionPayloadKeySpecifier)[];
export type CodeChallengeSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengePreviousValuesKeySpecifier = ('id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'rank' | CodeChallengePreviousValuesKeySpecifier)[];
export type CodeChallengePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	dashedName?: FieldPolicy<any> | FieldReadFunction<any>,
	localeTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeType?: FieldPolicy<any> | FieldReadFunction<any>,
	forumTopicId?: FieldPolicy<any> | FieldReadFunction<any>,
	translations?: FieldPolicy<any> | FieldReadFunction<any>,
	tests?: FieldPolicy<any> | FieldReadFunction<any>,
	solutions?: FieldPolicy<any> | FieldReadFunction<any>,
	instructions?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	videoUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	superOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	challengeOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	required?: FieldPolicy<any> | FieldReadFunction<any>,
	isRequired?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	isBeta?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CodeChallengeBlockSubscriptionPayloadKeySpecifier)[];
export type CodeChallengeBlockSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeBlockPreviousValuesKeySpecifier = ('id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'rank' | CodeChallengeBlockPreviousValuesKeySpecifier)[];
export type CodeChallengeBlockPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CommentSubscriptionPayloadKeySpecifier)[];
export type CommentSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'components' | 'contentText' | CommentPreviousValuesKeySpecifier)[];
export type CommentPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TechnologyLessonSubscriptionPayloadKeySpecifier)[];
export type TechnologyLessonSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonPreviousValuesKeySpecifier = ('id' | 'name' | 'components' | 'contentText' | TechnologyLessonPreviousValuesKeySpecifier)[];
export type TechnologyLessonPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CareerSubscriptionPayloadKeySpecifier)[];
export type CareerSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CareerPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'start_date' | CareerPreviousValuesKeySpecifier)[];
export type CareerPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonUserSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TechnologyLessonUserSubscriptionPayloadKeySpecifier)[];
export type TechnologyLessonUserSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyLessonUserPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | 'completedAt' | TechnologyLessonUserPreviousValuesKeySpecifier)[];
export type TechnologyLessonUserPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	completedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | UserTechnologySubscriptionPayloadKeySpecifier)[];
export type UserTechnologySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserTechnologyPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'components' | 'date_from' | 'date_till' | 'status' | UserTechnologyPreviousValuesKeySpecifier)[];
export type UserTechnologyPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	date_from?: FieldPolicy<any> | FieldReadFunction<any>,
	date_till?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TechnologySubscriptionPayloadKeySpecifier)[];
export type TechnologySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TechnologyPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'components' | 'contentText' | 'site_url' | TechnologyPreviousValuesKeySpecifier)[];
export type TechnologyPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	site_url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TeamSubscriptionPayloadKeySpecifier)[];
export type TeamSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'oldID' | 'address' | 'website' | 'email' | 'phone' | TeamPreviousValuesKeySpecifier)[];
export type TeamPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ProjectSubscriptionPayloadKeySpecifier)[];
export type ProjectSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectPreviousValuesKeySpecifier = ('id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | ProjectPreviousValuesKeySpecifier)[];
export type ProjectPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	sequence?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TemplateSubscriptionPayloadKeySpecifier)[];
export type TemplateSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplatePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'externalKey' | 'name' | 'description' | 'component' | 'props' | 'components' | 'vars' | 'rank' | TemplatePreviousValuesKeySpecifier)[];
export type TemplatePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	externalKey?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	component?: FieldPolicy<any> | FieldReadFunction<any>,
	props?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	vars?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ResourceSubscriptionPayloadKeySpecifier)[];
export type ResourceSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourcePreviousValuesKeySpecifier = ('id' | 'code' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'oldID' | 'mockUpdate' | 'components' | 'commentOldID' | 'class_key' | 'template' | ResourcePreviousValuesKeySpecifier)[];
export type ResourcePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	longtitle?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>,
	published?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidemenu?: FieldPolicy<any> | FieldReadFunction<any>,
	searchable?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	isfolder?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	positiveVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	negativeVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	neutralVotesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	mockUpdate?: FieldPolicy<any> | FieldReadFunction<any>,
	components?: FieldPolicy<any> | FieldReadFunction<any>,
	commentOldID?: FieldPolicy<any> | FieldReadFunction<any>,
	class_key?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatMessageSubscriptionPayloadKeySpecifier)[];
export type ChatMessageSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessagePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'content' | 'contentText' | ChatMessagePreviousValuesKeySpecifier)[];
export type ChatMessagePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentText?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | UserSubscriptionPayloadKeySpecifier)[];
export type UserSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'password' | 'fullname' | 'image' | 'address' | 'active' | 'activated' | 'deleted' | 'hidden' | 'sudo' | 'marketplaceToken' | 'acceptChatMessageAnonymous' | 'acceptNewChatRoomAnonymous' | 'acceptNewChatRoom' | 'oldID' | UserPreviousValuesKeySpecifier)[];
export type UserPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	activated?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	hidden?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	marketplaceToken?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptChatMessageAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptNewChatRoomAnonymous?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptNewChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ImportResponseKeySpecifier)[];
export type ImportResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | 'Logs' | 'CreatedBy' | ImportKeySpecifier)[];
export type ImportFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	Logs?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'level' | 'objectType' | 'message' | 'stack' | 'Import' | LogKeySpecifier)[];
export type LogFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	objectType?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	stack?: FieldPolicy<any> | FieldReadFunction<any>,
	Import?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateBlockKeySpecifier = ('count' | AggregateBlockKeySpecifier)[];
export type AggregateBlockFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatMessageReadedKeySpecifier = ('count' | AggregateChatMessageReadedKeySpecifier)[];
export type AggregateChatMessageReadedFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateChatRoomInvitationKeySpecifier = ('count' | AggregateChatRoomInvitationKeySpecifier)[];
export type AggregateChatRoomInvitationFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateFileKeySpecifier = ('count' | AggregateFileKeySpecifier)[];
export type AggregateFileFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateImportKeySpecifier = ('count' | AggregateImportKeySpecifier)[];
export type AggregateImportFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateInventoryKeySpecifier = ('count' | AggregateInventoryKeySpecifier)[];
export type AggregateInventoryFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLetsadsSmsMessageStatusKeySpecifier = ('count' | AggregateLetsadsSmsMessageStatusKeySpecifier)[];
export type AggregateLetsadsSmsMessageStatusFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLetsadsSmsMessageStatusItemKeySpecifier = ('count' | AggregateLetsadsSmsMessageStatusItemKeySpecifier)[];
export type AggregateLetsadsSmsMessageStatusItemFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLetterKeySpecifier = ('count' | AggregateLetterKeySpecifier)[];
export type AggregateLetterFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLogKeySpecifier = ('count' | AggregateLogKeySpecifier)[];
export type AggregateLogFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateLogedInKeySpecifier = ('count' | AggregateLogedInKeySpecifier)[];
export type AggregateLogedInFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateMessageKeySpecifier = ('count' | AggregateMessageKeySpecifier)[];
export type AggregateMessageFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregatePlayerKeySpecifier = ('count' | AggregatePlayerKeySpecifier)[];
export type AggregatePlayerFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateProjectTaskKeySpecifier = ('count' | AggregateProjectTaskKeySpecifier)[];
export type AggregateProjectTaskFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateResetPasswordKeySpecifier = ('count' | AggregateResetPasswordKeySpecifier)[];
export type AggregateResetPasswordFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateServiceCategoryKeySpecifier = ('count' | AggregateServiceCategoryKeySpecifier)[];
export type AggregateServiceCategoryFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateSettingsKeySpecifier = ('count' | AggregateSettingsKeySpecifier)[];
export type AggregateSettingsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateSmsMessageKeySpecifier = ('count' | AggregateSmsMessageKeySpecifier)[];
export type AggregateSmsMessageFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateSmsProviderKeySpecifier = ('count' | AggregateSmsProviderKeySpecifier)[];
export type AggregateSmsProviderFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTaskMemberKeySpecifier = ('count' | AggregateTaskMemberKeySpecifier)[];
export type AggregateTaskMemberFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateTourneyPlayerKeySpecifier = ('count' | AggregateTourneyPlayerKeySpecifier)[];
export type AggregateTourneyPlayerFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateUserGroupKeySpecifier = ('count' | AggregateUserGroupKeySpecifier)[];
export type AggregateUserGroupFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlockConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | BlockConnectionKeySpecifier)[];
export type BlockConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlockEdgeKeySpecifier = ('node' | 'cursor' | BlockEdgeKeySpecifier)[];
export type BlockEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlockPreviousValuesKeySpecifier = ('id' | 'representation' | 'type' | 'x' | 'y' | 'z' | BlockPreviousValuesKeySpecifier)[];
export type BlockPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	representation?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>,
	z?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlockSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | BlockSubscriptionPayloadKeySpecifier)[];
export type BlockSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatMessageReadedConnectionKeySpecifier)[];
export type ChatMessageReadedConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedEdgeKeySpecifier = ('node' | 'cursor' | ChatMessageReadedEdgeKeySpecifier)[];
export type ChatMessageReadedEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ChatRoomInvitationConnectionKeySpecifier)[];
export type ChatRoomInvitationConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationEdgeKeySpecifier = ('node' | 'cursor' | ChatRoomInvitationEdgeKeySpecifier)[];
export type ChatRoomInvitationEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | ChatRoomInvitationPreviousValuesKeySpecifier)[];
export type ChatRoomInvitationPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatRoomInvitationSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ChatRoomInvitationSubscriptionPayloadKeySpecifier)[];
export type ChatRoomInvitationSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'address' | 'type' | 'source' | 'bytecode' | 'abi' | EthAccountPreviousValuesKeySpecifier)[];
export type EthAccountPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	bytecode?: FieldPolicy<any> | FieldReadFunction<any>,
	abi?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthAccountSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthAccountSubscriptionPayloadKeySpecifier)[];
export type EthAccountSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'hash' | 'number' | 'difficulty' | 'totalDifficulty' | 'extraData' | 'gasLimit' | 'gasUsed' | 'mixHash' | 'nonce' | 'parentHash' | 'receiptsRoot' | 'sha3Uncles' | 'size' | 'stateRoot' | 'date' | 'transactionsRoot' | 'transactions_count' | EthBlockPreviousValuesKeySpecifier)[];
export type EthBlockPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	difficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	totalDifficulty?: FieldPolicy<any> | FieldReadFunction<any>,
	extraData?: FieldPolicy<any> | FieldReadFunction<any>,
	gasLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	gasUsed?: FieldPolicy<any> | FieldReadFunction<any>,
	mixHash?: FieldPolicy<any> | FieldReadFunction<any>,
	nonce?: FieldPolicy<any> | FieldReadFunction<any>,
	parentHash?: FieldPolicy<any> | FieldReadFunction<any>,
	receiptsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	sha3Uncles?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	stateRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	transactionsRoot?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthBlockSubscriptionPayloadKeySpecifier)[];
export type EthBlockSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourcePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'source' | EthContractSourcePreviousValuesKeySpecifier)[];
export type EthContractSourcePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | EthContractSourceSubscriptionPayloadKeySpecifier)[];
export type EthContractSourceSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthTransactionPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'chainId' | 'amount' | 'input' | 'index' | 'address' | 'type' | 'v' | 'r' | 's' | EthTransactionPreviousValuesKeySpecifier)[];
export type EthTransactionPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	chainId?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	input?: FieldPolicy<any> | FieldReadFunction<any>,
	index?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	v?: FieldPolicy<any> | FieldReadFunction<any>,
	r?: FieldPolicy<any> | FieldReadFunction<any>,
	s?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | FileConnectionKeySpecifier)[];
export type FileConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileEdgeKeySpecifier = ('node' | 'cursor' | FileEdgeKeySpecifier)[];
export type FileEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'path' | 'name' | 'filename' | 'mimetype' | 'encoding' | 'hash' | 'size' | 'rank' | FilePreviousValuesKeySpecifier)[];
export type FilePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	mimetype?: FieldPolicy<any> | FieldReadFunction<any>,
	encoding?: FieldPolicy<any> | FieldReadFunction<any>,
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | FileSubscriptionPayloadKeySpecifier)[];
export type FileSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ImportConnectionKeySpecifier)[];
export type ImportConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportEdgeKeySpecifier = ('node' | 'cursor' | ImportEdgeKeySpecifier)[];
export type ImportEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | ImportPreviousValuesKeySpecifier)[];
export type ImportPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ImportSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ImportSubscriptionPayloadKeySpecifier)[];
export type ImportSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InventoryConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | InventoryConnectionKeySpecifier)[];
export type InventoryConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InventoryEdgeKeySpecifier = ('node' | 'cursor' | InventoryEdgeKeySpecifier)[];
export type InventoryEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InventoryPreviousValuesKeySpecifier = ('id' | 'cursor' | 'data' | InventoryPreviousValuesKeySpecifier)[];
export type InventoryPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InventorySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | InventorySubscriptionPayloadKeySpecifier)[];
export type InventorySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'errorCode' | 'SmsMessage' | 'Items' | LetsadsSmsMessageStatusKeySpecifier)[];
export type LetsadsSmsMessageStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errorCode?: FieldPolicy<any> | FieldReadFunction<any>,
	SmsMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	Items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'recipients' | 'Provider' | 'deletOnSend' | 'CreatedBy' | 'Status' | SmsMessageKeySpecifier)[];
export type SmsMessageFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	recipients?: FieldPolicy<any> | FieldReadFunction<any>,
	Provider?: FieldPolicy<any> | FieldReadFunction<any>,
	deletOnSend?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	Status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'credentials' | 'CreatedBy' | SmsProviderKeySpecifier)[];
export type SmsProviderFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	credentials?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'sms_id' | 'Status' | LetsadsSmsMessageStatusItemKeySpecifier)[];
export type LetsadsSmsMessageStatusItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sms_id?: FieldPolicy<any> | FieldReadFunction<any>,
	Status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LetsadsSmsMessageStatusConnectionKeySpecifier)[];
export type LetsadsSmsMessageStatusConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusEdgeKeySpecifier = ('node' | 'cursor' | LetsadsSmsMessageStatusEdgeKeySpecifier)[];
export type LetsadsSmsMessageStatusEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LetsadsSmsMessageStatusItemConnectionKeySpecifier)[];
export type LetsadsSmsMessageStatusItemConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemEdgeKeySpecifier = ('node' | 'cursor' | LetsadsSmsMessageStatusItemEdgeKeySpecifier)[];
export type LetsadsSmsMessageStatusItemEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'sms_id' | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier)[];
export type LetsadsSmsMessageStatusItemPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sms_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier)[];
export type LetsadsSmsMessageStatusItemSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'errorCode' | LetsadsSmsMessageStatusPreviousValuesKeySpecifier)[];
export type LetsadsSmsMessageStatusPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	errorCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier)[];
export type LetsadsSmsMessageStatusSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | 'User' | LetterKeySpecifier)[];
export type LetterFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOnSend?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	returnTo?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LetterConnectionKeySpecifier)[];
export type LetterConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterEdgeKeySpecifier = ('node' | 'cursor' | LetterEdgeKeySpecifier)[];
export type LetterEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'email' | 'subject' | 'message' | 'status' | 'rank' | 'deleteOnSend' | 'replyTo' | 'returnTo' | LetterPreviousValuesKeySpecifier)[];
export type LetterPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteOnSend?: FieldPolicy<any> | FieldReadFunction<any>,
	replyTo?: FieldPolicy<any> | FieldReadFunction<any>,
	returnTo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LetterSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LetterSubscriptionPayloadKeySpecifier)[];
export type LetterSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LogConnectionKeySpecifier)[];
export type LogConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogEdgeKeySpecifier = ('node' | 'cursor' | LogEdgeKeySpecifier)[];
export type LogEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | LogedInConnectionKeySpecifier)[];
export type LogedInConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInEdgeKeySpecifier = ('node' | 'cursor' | LogedInEdgeKeySpecifier)[];
export type LogedInEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'fake' | 'updatedAt' | LogedInPreviousValuesKeySpecifier)[];
export type LogedInPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	fake?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogedInSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LogedInSubscriptionPayloadKeySpecifier)[];
export type LogedInSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'level' | 'objectType' | 'message' | 'stack' | LogPreviousValuesKeySpecifier)[];
export type LogPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	level?: FieldPolicy<any> | FieldReadFunction<any>,
	objectType?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	stack?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LogSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | LogSubscriptionPayloadKeySpecifier)[];
export type LogSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | MessageConnectionKeySpecifier)[];
export type MessageConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageEdgeKeySpecifier = ('node' | 'cursor' | MessageEdgeKeySpecifier)[];
export type MessageEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'code' | 'comment' | 'oldID' | NotificationTypePreviousValuesKeySpecifier)[];
export type NotificationTypePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	oldID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTypeSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | NotificationTypeSubscriptionPayloadKeySpecifier)[];
export type NotificationTypeSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | PlayerConnectionKeySpecifier)[];
export type PlayerConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerEdgeKeySpecifier = ('node' | 'cursor' | PlayerEdgeKeySpecifier)[];
export type PlayerEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectTaskConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ProjectTaskConnectionKeySpecifier)[];
export type ProjectTaskConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectTaskEdgeKeySpecifier = ('node' | 'cursor' | ProjectTaskEdgeKeySpecifier)[];
export type ProjectTaskEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectTaskPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | ProjectTaskPreviousValuesKeySpecifier)[];
export type ProjectTaskPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectTaskSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ProjectTaskSubscriptionPayloadKeySpecifier)[];
export type ProjectTaskSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ResetPasswordConnectionKeySpecifier)[];
export type ResetPasswordConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordEdgeKeySpecifier = ('node' | 'cursor' | ResetPasswordEdgeKeySpecifier)[];
export type ResetPasswordEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'code' | 'password' | 'validTill' | ResetPasswordPreviousValuesKeySpecifier)[];
export type ResetPasswordPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	validTill?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetPasswordSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ResetPasswordSubscriptionPayloadKeySpecifier)[];
export type ResetPasswordSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | ResourceTagPreviousValuesKeySpecifier)[];
export type ResourceTagPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResourceTagSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ResourceTagSubscriptionPayloadKeySpecifier)[];
export type ResourceTagSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceCategoryConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | ServiceCategoryConnectionKeySpecifier)[];
export type ServiceCategoryConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceCategoryEdgeKeySpecifier = ('node' | 'cursor' | ServiceCategoryEdgeKeySpecifier)[];
export type ServiceCategoryEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceCategoryPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'code' | ServiceCategoryPreviousValuesKeySpecifier)[];
export type ServiceCategoryPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceCategorySubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | ServiceCategorySubscriptionPayloadKeySpecifier)[];
export type ServiceCategorySubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | SettingsConnectionKeySpecifier)[];
export type SettingsConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsEdgeKeySpecifier = ('node' | 'cursor' | SettingsEdgeKeySpecifier)[];
export type SettingsEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsPreviousValuesKeySpecifier = ('id' | 'renderDistance' | SettingsPreviousValuesKeySpecifier)[];
export type SettingsPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	renderDistance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | SettingsSubscriptionPayloadKeySpecifier)[];
export type SettingsSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | SmsMessageConnectionKeySpecifier)[];
export type SmsMessageConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageEdgeKeySpecifier = ('node' | 'cursor' | SmsMessageEdgeKeySpecifier)[];
export type SmsMessageEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessagePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'from' | 'text' | 'recipients' | 'deletOnSend' | SmsMessagePreviousValuesKeySpecifier)[];
export type SmsMessagePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	recipients?: FieldPolicy<any> | FieldReadFunction<any>,
	deletOnSend?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | SmsMessageSubscriptionPayloadKeySpecifier)[];
export type SmsMessageSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | SmsProviderConnectionKeySpecifier)[];
export type SmsProviderConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderEdgeKeySpecifier = ('node' | 'cursor' | SmsProviderEdgeKeySpecifier)[];
export type SmsProviderEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'credentials' | SmsProviderPreviousValuesKeySpecifier)[];
export type SmsProviderPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	credentials?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | SmsProviderSubscriptionPayloadKeySpecifier)[];
export type SmsProviderSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'status' | TagPreviousValuesKeySpecifier)[];
export type TagPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TagSubscriptionPayloadKeySpecifier)[];
export type TagSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskMemberConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TaskMemberConnectionKeySpecifier)[];
export type TaskMemberConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskMemberEdgeKeySpecifier = ('node' | 'cursor' | TaskMemberEdgeKeySpecifier)[];
export type TaskMemberEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskMemberPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'status' | TaskMemberPreviousValuesKeySpecifier)[];
export type TaskMemberPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaskMemberSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TaskMemberSubscriptionPayloadKeySpecifier)[];
export type TaskMemberSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'text' | 'quantity' | 'date' | TestPreviousValuesKeySpecifier)[];
export type TestPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TestSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TestSubscriptionPayloadKeySpecifier)[];
export type TestSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPlayerConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | TourneyPlayerConnectionKeySpecifier)[];
export type TourneyPlayerConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPlayerEdgeKeySpecifier = ('node' | 'cursor' | TourneyPlayerEdgeKeySpecifier)[];
export type TourneyPlayerEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPlayerPreviousValuesKeySpecifier = ('id' | TourneyPlayerPreviousValuesKeySpecifier)[];
export type TourneyPlayerPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyPlayerSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | TourneyPlayerSubscriptionPayloadKeySpecifier)[];
export type TourneyPlayerSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | UserGroupConnectionKeySpecifier)[];
export type UserGroupConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupEdgeKeySpecifier = ('node' | 'cursor' | UserGroupEdgeKeySpecifier)[];
export type UserGroupEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | UserGroupPreviousValuesKeySpecifier)[];
export type UserGroupPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserGroupSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | UserGroupSubscriptionPayloadKeySpecifier)[];
export type UserGroupSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VotePreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'value' | VotePreviousValuesKeySpecifier)[];
export type VotePreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VoteSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | VoteSubscriptionPayloadKeySpecifier)[];
export type VoteSubscriptionPayloadFieldPolicy = {
	mutation?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedFields?: FieldPolicy<any> | FieldReadFunction<any>,
	previousValues?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | FileResponseKeySpecifier)[];
export type FileResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsMessageResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | SmsMessageResponseKeySpecifier)[];
export type SmsMessageResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | SmsProviderResponseKeySpecifier)[];
export type SmsProviderResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarketplaceAuthResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | MarketplaceAuthResponseKeySpecifier)[];
export type MarketplaceAuthResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | GameResponseKeySpecifier)[];
export type GameResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameResultResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | GameResultResponseKeySpecifier)[];
export type GameResultResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TournamentResponseKeySpecifier)[];
export type TournamentResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TournamentGroupResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TournamentGroupResponseKeySpecifier)[];
export type TournamentGroupResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TourneyResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TourneyResponseKeySpecifier)[];
export type TourneyResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatMessageReadedResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatMessageReadedResponseKeySpecifier)[];
export type ChatMessageReadedResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthBlockResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthBlockResponseKeySpecifier)[];
export type EthBlockResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthContractSourceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthContractSourceResponseKeySpecifier)[];
export type EthContractSourceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EthPersonalAccountResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | EthPersonalAccountResponseKeySpecifier)[];
export type EthPersonalAccountResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IceCandidateKeySpecifier = ('from' | 'to' | 'sdp' | 'callRequestId' | IceCandidateKeySpecifier)[];
export type IceCandidateFieldPolicy = {
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>,
	sdp?: FieldPolicy<any> | FieldReadFunction<any>,
	callRequestId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | PositionResponseKeySpecifier)[];
export type PositionResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ProjectMemberResponseKeySpecifier)[];
export type ProjectMemberResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ServiceResponseKeySpecifier)[];
export type ServiceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ServiceCategoryResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ServiceCategoryResponseKeySpecifier)[];
export type ServiceCategoryResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TeamResponseKeySpecifier)[];
export type TeamResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamMemberResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | TeamMemberResponseKeySpecifier)[];
export type TeamMemberResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RouteResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | RouteResponseKeySpecifier)[];
export type RouteResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Query?: {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: QueryFieldPolicy,
	},
	Gallery?: {
		keyFields?: false | GalleryKeySpecifier | (() => undefined | GalleryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GalleryFieldPolicy,
	},
	Node?: {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NodeFieldPolicy,
	},
	File?: {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FileFieldPolicy,
	},
	User?: {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserFieldPolicy,
	},
	UserGroup?: {
		keyFields?: false | UserGroupKeySpecifier | (() => undefined | UserGroupKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserGroupFieldPolicy,
	},
	LogedIn?: {
		keyFields?: false | LogedInKeySpecifier | (() => undefined | LogedInKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogedInFieldPolicy,
	},
	Resource?: {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceFieldPolicy,
	},
	Vote?: {
		keyFields?: false | VoteKeySpecifier | (() => undefined | VoteKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: VoteFieldPolicy,
	},
	ResourceTag?: {
		keyFields?: false | ResourceTagKeySpecifier | (() => undefined | ResourceTagKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceTagFieldPolicy,
	},
	Tag?: {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TagFieldPolicy,
	},
	Service?: {
		keyFields?: false | ServiceKeySpecifier | (() => undefined | ServiceKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceFieldPolicy,
	},
	ProjectMember?: {
		keyFields?: false | ProjectMemberKeySpecifier | (() => undefined | ProjectMemberKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectMemberFieldPolicy,
	},
	Project?: {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectFieldPolicy,
	},
	Template?: {
		keyFields?: false | TemplateKeySpecifier | (() => undefined | TemplateKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TemplateFieldPolicy,
	},
	ProjectTask?: {
		keyFields?: false | ProjectTaskKeySpecifier | (() => undefined | ProjectTaskKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectTaskFieldPolicy,
	},
	Task?: {
		keyFields?: false | TaskKeySpecifier | (() => undefined | TaskKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskFieldPolicy,
	},
	TaskMember?: {
		keyFields?: false | TaskMemberKeySpecifier | (() => undefined | TaskMemberKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskMemberFieldPolicy,
	},
	Timer?: {
		keyFields?: false | TimerKeySpecifier | (() => undefined | TimerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TimerFieldPolicy,
	},
	TaskReaction?: {
		keyFields?: false | TaskReactionKeySpecifier | (() => undefined | TaskReactionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskReactionFieldPolicy,
	},
	ChatRoom?: {
		keyFields?: false | ChatRoomKeySpecifier | (() => undefined | ChatRoomKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomFieldPolicy,
	},
	ChatMessage?: {
		keyFields?: false | ChatMessageKeySpecifier | (() => undefined | ChatMessageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageFieldPolicy,
	},
	ChatMessageReaded?: {
		keyFields?: false | ChatMessageReadedKeySpecifier | (() => undefined | ChatMessageReadedKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageReadedFieldPolicy,
	},
	ChatRoomInvitation?: {
		keyFields?: false | ChatRoomInvitationKeySpecifier | (() => undefined | ChatRoomInvitationKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomInvitationFieldPolicy,
	},
	Notice?: {
		keyFields?: false | NoticeKeySpecifier | (() => undefined | NoticeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NoticeFieldPolicy,
	},
	CallRequest?: {
		keyFields?: false | CallRequestKeySpecifier | (() => undefined | CallRequestKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CallRequestFieldPolicy,
	},
	Team?: {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamFieldPolicy,
	},
	TeamMember?: {
		keyFields?: false | TeamMemberKeySpecifier | (() => undefined | TeamMemberKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamMemberFieldPolicy,
	},
	EthAccount?: {
		keyFields?: false | EthAccountKeySpecifier | (() => undefined | EthAccountKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthAccountFieldPolicy,
	},
	EthTransaction?: {
		keyFields?: false | EthTransactionKeySpecifier | (() => undefined | EthTransactionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthTransactionFieldPolicy,
	},
	EthBlock?: {
		keyFields?: false | EthBlockKeySpecifier | (() => undefined | EthBlockKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthBlockFieldPolicy,
	},
	EthContractSource?: {
		keyFields?: false | EthContractSourceKeySpecifier | (() => undefined | EthContractSourceKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthContractSourceFieldPolicy,
	},
	ServiceCategory?: {
		keyFields?: false | ServiceCategoryKeySpecifier | (() => undefined | ServiceCategoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceCategoryFieldPolicy,
	},
	NotificationType?: {
		keyFields?: false | NotificationTypeKeySpecifier | (() => undefined | NotificationTypeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NotificationTypeFieldPolicy,
	},
	World?: {
		keyFields?: false | WorldKeySpecifier | (() => undefined | WorldKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: WorldFieldPolicy,
	},
	Block?: {
		keyFields?: false | BlockKeySpecifier | (() => undefined | BlockKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BlockFieldPolicy,
	},
	Player?: {
		keyFields?: false | PlayerKeySpecifier | (() => undefined | PlayerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PlayerFieldPolicy,
	},
	Inventory?: {
		keyFields?: false | InventoryKeySpecifier | (() => undefined | InventoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: InventoryFieldPolicy,
	},
	Message?: {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MessageFieldPolicy,
	},
	Settings?: {
		keyFields?: false | SettingsKeySpecifier | (() => undefined | SettingsKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SettingsFieldPolicy,
	},
	Game?: {
		keyFields?: false | GameKeySpecifier | (() => undefined | GameKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameFieldPolicy,
	},
	Tourney?: {
		keyFields?: false | TourneyKeySpecifier | (() => undefined | TourneyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyFieldPolicy,
	},
	Tournament?: {
		keyFields?: false | TournamentKeySpecifier | (() => undefined | TournamentKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentFieldPolicy,
	},
	TournamentGroup?: {
		keyFields?: false | TournamentGroupKeySpecifier | (() => undefined | TournamentGroupKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentGroupFieldPolicy,
	},
	TourneyPlayer?: {
		keyFields?: false | TourneyPlayerKeySpecifier | (() => undefined | TourneyPlayerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyPlayerFieldPolicy,
	},
	GameResult?: {
		keyFields?: false | GameResultKeySpecifier | (() => undefined | GameResultKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResultFieldPolicy,
	},
	Position?: {
		keyFields?: false | PositionKeySpecifier | (() => undefined | PositionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PositionFieldPolicy,
	},
	Route?: {
		keyFields?: false | RouteKeySpecifier | (() => undefined | RouteKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RouteFieldPolicy,
	},
	CodeChallenge?: {
		keyFields?: false | CodeChallengeKeySpecifier | (() => undefined | CodeChallengeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeFieldPolicy,
	},
	CodeChallengeBlock?: {
		keyFields?: false | CodeChallengeBlockKeySpecifier | (() => undefined | CodeChallengeBlockKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeBlockFieldPolicy,
	},
	Comment?: {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CommentFieldPolicy,
	},
	TechnologyLesson?: {
		keyFields?: false | TechnologyLessonKeySpecifier | (() => undefined | TechnologyLessonKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonFieldPolicy,
	},
	Technology?: {
		keyFields?: false | TechnologyKeySpecifier | (() => undefined | TechnologyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyFieldPolicy,
	},
	UserTechnology?: {
		keyFields?: false | UserTechnologyKeySpecifier | (() => undefined | UserTechnologyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserTechnologyFieldPolicy,
	},
	TechnologyLessonUser?: {
		keyFields?: false | TechnologyLessonUserKeySpecifier | (() => undefined | TechnologyLessonUserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonUserFieldPolicy,
	},
	Career?: {
		keyFields?: false | CareerKeySpecifier | (() => undefined | CareerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CareerFieldPolicy,
	},
	Test?: {
		keyFields?: false | TestKeySpecifier | (() => undefined | TestKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TestFieldPolicy,
	},
	GalleryConnection?: {
		keyFields?: false | GalleryConnectionKeySpecifier | (() => undefined | GalleryConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GalleryConnectionFieldPolicy,
	},
	PageInfo?: {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PageInfoFieldPolicy,
	},
	GalleryEdge?: {
		keyFields?: false | GalleryEdgeKeySpecifier | (() => undefined | GalleryEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GalleryEdgeFieldPolicy,
	},
	AggregateGallery?: {
		keyFields?: false | AggregateGalleryKeySpecifier | (() => undefined | AggregateGalleryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateGalleryFieldPolicy,
	},
	WorldConnection?: {
		keyFields?: false | WorldConnectionKeySpecifier | (() => undefined | WorldConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: WorldConnectionFieldPolicy,
	},
	WorldEdge?: {
		keyFields?: false | WorldEdgeKeySpecifier | (() => undefined | WorldEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: WorldEdgeFieldPolicy,
	},
	AggregateWorld?: {
		keyFields?: false | AggregateWorldKeySpecifier | (() => undefined | AggregateWorldKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateWorldFieldPolicy,
	},
	NoticeConnection?: {
		keyFields?: false | NoticeConnectionKeySpecifier | (() => undefined | NoticeConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NoticeConnectionFieldPolicy,
	},
	NoticeEdge?: {
		keyFields?: false | NoticeEdgeKeySpecifier | (() => undefined | NoticeEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NoticeEdgeFieldPolicy,
	},
	AggregateNotice?: {
		keyFields?: false | AggregateNoticeKeySpecifier | (() => undefined | AggregateNoticeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateNoticeFieldPolicy,
	},
	NotificationTypeConnection?: {
		keyFields?: false | NotificationTypeConnectionKeySpecifier | (() => undefined | NotificationTypeConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NotificationTypeConnectionFieldPolicy,
	},
	NotificationTypeEdge?: {
		keyFields?: false | NotificationTypeEdgeKeySpecifier | (() => undefined | NotificationTypeEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NotificationTypeEdgeFieldPolicy,
	},
	AggregateNotificationType?: {
		keyFields?: false | AggregateNotificationTypeKeySpecifier | (() => undefined | AggregateNotificationTypeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateNotificationTypeFieldPolicy,
	},
	ResourceTagConnection?: {
		keyFields?: false | ResourceTagConnectionKeySpecifier | (() => undefined | ResourceTagConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceTagConnectionFieldPolicy,
	},
	ResourceTagEdge?: {
		keyFields?: false | ResourceTagEdgeKeySpecifier | (() => undefined | ResourceTagEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceTagEdgeFieldPolicy,
	},
	AggregateResourceTag?: {
		keyFields?: false | AggregateResourceTagKeySpecifier | (() => undefined | AggregateResourceTagKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateResourceTagFieldPolicy,
	},
	TagConnection?: {
		keyFields?: false | TagConnectionKeySpecifier | (() => undefined | TagConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TagConnectionFieldPolicy,
	},
	TagEdge?: {
		keyFields?: false | TagEdgeKeySpecifier | (() => undefined | TagEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TagEdgeFieldPolicy,
	},
	AggregateTag?: {
		keyFields?: false | AggregateTagKeySpecifier | (() => undefined | AggregateTagKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTagFieldPolicy,
	},
	VoteConnection?: {
		keyFields?: false | VoteConnectionKeySpecifier | (() => undefined | VoteConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: VoteConnectionFieldPolicy,
	},
	VoteEdge?: {
		keyFields?: false | VoteEdgeKeySpecifier | (() => undefined | VoteEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: VoteEdgeFieldPolicy,
	},
	AggregateVote?: {
		keyFields?: false | AggregateVoteKeySpecifier | (() => undefined | AggregateVoteKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateVoteFieldPolicy,
	},
	ChatRoomConnection?: {
		keyFields?: false | ChatRoomConnectionKeySpecifier | (() => undefined | ChatRoomConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomConnectionFieldPolicy,
	},
	ChatRoomEdge?: {
		keyFields?: false | ChatRoomEdgeKeySpecifier | (() => undefined | ChatRoomEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomEdgeFieldPolicy,
	},
	AggregateChatRoom?: {
		keyFields?: false | AggregateChatRoomKeySpecifier | (() => undefined | AggregateChatRoomKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateChatRoomFieldPolicy,
	},
	GameConnection?: {
		keyFields?: false | GameConnectionKeySpecifier | (() => undefined | GameConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameConnectionFieldPolicy,
	},
	GameEdge?: {
		keyFields?: false | GameEdgeKeySpecifier | (() => undefined | GameEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameEdgeFieldPolicy,
	},
	AggregateGame?: {
		keyFields?: false | AggregateGameKeySpecifier | (() => undefined | AggregateGameKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateGameFieldPolicy,
	},
	GameResultConnection?: {
		keyFields?: false | GameResultConnectionKeySpecifier | (() => undefined | GameResultConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResultConnectionFieldPolicy,
	},
	GameResultEdge?: {
		keyFields?: false | GameResultEdgeKeySpecifier | (() => undefined | GameResultEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResultEdgeFieldPolicy,
	},
	AggregateGameResult?: {
		keyFields?: false | AggregateGameResultKeySpecifier | (() => undefined | AggregateGameResultKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateGameResultFieldPolicy,
	},
	TournamentConnection?: {
		keyFields?: false | TournamentConnectionKeySpecifier | (() => undefined | TournamentConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentConnectionFieldPolicy,
	},
	TournamentEdge?: {
		keyFields?: false | TournamentEdgeKeySpecifier | (() => undefined | TournamentEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentEdgeFieldPolicy,
	},
	AggregateTournament?: {
		keyFields?: false | AggregateTournamentKeySpecifier | (() => undefined | AggregateTournamentKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTournamentFieldPolicy,
	},
	TournamentGroupConnection?: {
		keyFields?: false | TournamentGroupConnectionKeySpecifier | (() => undefined | TournamentGroupConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentGroupConnectionFieldPolicy,
	},
	TournamentGroupEdge?: {
		keyFields?: false | TournamentGroupEdgeKeySpecifier | (() => undefined | TournamentGroupEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentGroupEdgeFieldPolicy,
	},
	AggregateTournamentGroup?: {
		keyFields?: false | AggregateTournamentGroupKeySpecifier | (() => undefined | AggregateTournamentGroupKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTournamentGroupFieldPolicy,
	},
	TourneyConnection?: {
		keyFields?: false | TourneyConnectionKeySpecifier | (() => undefined | TourneyConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyConnectionFieldPolicy,
	},
	TourneyEdge?: {
		keyFields?: false | TourneyEdgeKeySpecifier | (() => undefined | TourneyEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyEdgeFieldPolicy,
	},
	AggregateTourney?: {
		keyFields?: false | AggregateTourneyKeySpecifier | (() => undefined | AggregateTourneyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTourneyFieldPolicy,
	},
	EthAccountConnection?: {
		keyFields?: false | EthAccountConnectionKeySpecifier | (() => undefined | EthAccountConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthAccountConnectionFieldPolicy,
	},
	EthAccountEdge?: {
		keyFields?: false | EthAccountEdgeKeySpecifier | (() => undefined | EthAccountEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthAccountEdgeFieldPolicy,
	},
	AggregateEthAccount?: {
		keyFields?: false | AggregateEthAccountKeySpecifier | (() => undefined | AggregateEthAccountKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateEthAccountFieldPolicy,
	},
	EthContractSourceConnection?: {
		keyFields?: false | EthContractSourceConnectionKeySpecifier | (() => undefined | EthContractSourceConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthContractSourceConnectionFieldPolicy,
	},
	EthContractSourceEdge?: {
		keyFields?: false | EthContractSourceEdgeKeySpecifier | (() => undefined | EthContractSourceEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthContractSourceEdgeFieldPolicy,
	},
	AggregateEthContractSource?: {
		keyFields?: false | AggregateEthContractSourceKeySpecifier | (() => undefined | AggregateEthContractSourceKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateEthContractSourceFieldPolicy,
	},
	EthTransactionConnection?: {
		keyFields?: false | EthTransactionConnectionKeySpecifier | (() => undefined | EthTransactionConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthTransactionConnectionFieldPolicy,
	},
	EthTransactionEdge?: {
		keyFields?: false | EthTransactionEdgeKeySpecifier | (() => undefined | EthTransactionEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthTransactionEdgeFieldPolicy,
	},
	AggregateEthTransaction?: {
		keyFields?: false | AggregateEthTransactionKeySpecifier | (() => undefined | AggregateEthTransactionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateEthTransactionFieldPolicy,
	},
	CallRequestConnection?: {
		keyFields?: false | CallRequestConnectionKeySpecifier | (() => undefined | CallRequestConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CallRequestConnectionFieldPolicy,
	},
	CallRequestEdge?: {
		keyFields?: false | CallRequestEdgeKeySpecifier | (() => undefined | CallRequestEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CallRequestEdgeFieldPolicy,
	},
	AggregateCallRequest?: {
		keyFields?: false | AggregateCallRequestKeySpecifier | (() => undefined | AggregateCallRequestKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateCallRequestFieldPolicy,
	},
	PositionConnection?: {
		keyFields?: false | PositionConnectionKeySpecifier | (() => undefined | PositionConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PositionConnectionFieldPolicy,
	},
	PositionEdge?: {
		keyFields?: false | PositionEdgeKeySpecifier | (() => undefined | PositionEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PositionEdgeFieldPolicy,
	},
	AggregatePosition?: {
		keyFields?: false | AggregatePositionKeySpecifier | (() => undefined | AggregatePositionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregatePositionFieldPolicy,
	},
	ProjectMemberConnection?: {
		keyFields?: false | ProjectMemberConnectionKeySpecifier | (() => undefined | ProjectMemberConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectMemberConnectionFieldPolicy,
	},
	ProjectMemberEdge?: {
		keyFields?: false | ProjectMemberEdgeKeySpecifier | (() => undefined | ProjectMemberEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectMemberEdgeFieldPolicy,
	},
	AggregateProjectMember?: {
		keyFields?: false | AggregateProjectMemberKeySpecifier | (() => undefined | AggregateProjectMemberKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateProjectMemberFieldPolicy,
	},
	ServiceConnection?: {
		keyFields?: false | ServiceConnectionKeySpecifier | (() => undefined | ServiceConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceConnectionFieldPolicy,
	},
	ServiceEdge?: {
		keyFields?: false | ServiceEdgeKeySpecifier | (() => undefined | ServiceEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceEdgeFieldPolicy,
	},
	AggregateService?: {
		keyFields?: false | AggregateServiceKeySpecifier | (() => undefined | AggregateServiceKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateServiceFieldPolicy,
	},
	TaskConnection?: {
		keyFields?: false | TaskConnectionKeySpecifier | (() => undefined | TaskConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskConnectionFieldPolicy,
	},
	TaskEdge?: {
		keyFields?: false | TaskEdgeKeySpecifier | (() => undefined | TaskEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskEdgeFieldPolicy,
	},
	AggregateTask?: {
		keyFields?: false | AggregateTaskKeySpecifier | (() => undefined | AggregateTaskKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTaskFieldPolicy,
	},
	TaskReactionConnection?: {
		keyFields?: false | TaskReactionConnectionKeySpecifier | (() => undefined | TaskReactionConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskReactionConnectionFieldPolicy,
	},
	TaskReactionEdge?: {
		keyFields?: false | TaskReactionEdgeKeySpecifier | (() => undefined | TaskReactionEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskReactionEdgeFieldPolicy,
	},
	AggregateTaskReaction?: {
		keyFields?: false | AggregateTaskReactionKeySpecifier | (() => undefined | AggregateTaskReactionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTaskReactionFieldPolicy,
	},
	TeamMemberConnection?: {
		keyFields?: false | TeamMemberConnectionKeySpecifier | (() => undefined | TeamMemberConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamMemberConnectionFieldPolicy,
	},
	TeamMemberEdge?: {
		keyFields?: false | TeamMemberEdgeKeySpecifier | (() => undefined | TeamMemberEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamMemberEdgeFieldPolicy,
	},
	AggregateTeamMember?: {
		keyFields?: false | AggregateTeamMemberKeySpecifier | (() => undefined | AggregateTeamMemberKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTeamMemberFieldPolicy,
	},
	TimerConnection?: {
		keyFields?: false | TimerConnectionKeySpecifier | (() => undefined | TimerConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TimerConnectionFieldPolicy,
	},
	TimerEdge?: {
		keyFields?: false | TimerEdgeKeySpecifier | (() => undefined | TimerEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TimerEdgeFieldPolicy,
	},
	AggregateTimer?: {
		keyFields?: false | AggregateTimerKeySpecifier | (() => undefined | AggregateTimerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTimerFieldPolicy,
	},
	RouteConnection?: {
		keyFields?: false | RouteConnectionKeySpecifier | (() => undefined | RouteConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RouteConnectionFieldPolicy,
	},
	RouteEdge?: {
		keyFields?: false | RouteEdgeKeySpecifier | (() => undefined | RouteEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RouteEdgeFieldPolicy,
	},
	AggregateRoute?: {
		keyFields?: false | AggregateRouteKeySpecifier | (() => undefined | AggregateRouteKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateRouteFieldPolicy,
	},
	CodeChallengeConnection?: {
		keyFields?: false | CodeChallengeConnectionKeySpecifier | (() => undefined | CodeChallengeConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeConnectionFieldPolicy,
	},
	CodeChallengeEdge?: {
		keyFields?: false | CodeChallengeEdgeKeySpecifier | (() => undefined | CodeChallengeEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeEdgeFieldPolicy,
	},
	AggregateCodeChallenge?: {
		keyFields?: false | AggregateCodeChallengeKeySpecifier | (() => undefined | AggregateCodeChallengeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateCodeChallengeFieldPolicy,
	},
	CodeChallengeBlockConnection?: {
		keyFields?: false | CodeChallengeBlockConnectionKeySpecifier | (() => undefined | CodeChallengeBlockConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeBlockConnectionFieldPolicy,
	},
	CodeChallengeBlockEdge?: {
		keyFields?: false | CodeChallengeBlockEdgeKeySpecifier | (() => undefined | CodeChallengeBlockEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeBlockEdgeFieldPolicy,
	},
	AggregateCodeChallengeBlock?: {
		keyFields?: false | AggregateCodeChallengeBlockKeySpecifier | (() => undefined | AggregateCodeChallengeBlockKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateCodeChallengeBlockFieldPolicy,
	},
	CommentConnection?: {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CommentEdgeFieldPolicy,
	},
	AggregateComment?: {
		keyFields?: false | AggregateCommentKeySpecifier | (() => undefined | AggregateCommentKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateCommentFieldPolicy,
	},
	TechnologyLessonConnection?: {
		keyFields?: false | TechnologyLessonConnectionKeySpecifier | (() => undefined | TechnologyLessonConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonConnectionFieldPolicy,
	},
	TechnologyLessonEdge?: {
		keyFields?: false | TechnologyLessonEdgeKeySpecifier | (() => undefined | TechnologyLessonEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonEdgeFieldPolicy,
	},
	AggregateTechnologyLesson?: {
		keyFields?: false | AggregateTechnologyLessonKeySpecifier | (() => undefined | AggregateTechnologyLessonKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTechnologyLessonFieldPolicy,
	},
	CareerConnection?: {
		keyFields?: false | CareerConnectionKeySpecifier | (() => undefined | CareerConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CareerConnectionFieldPolicy,
	},
	CareerEdge?: {
		keyFields?: false | CareerEdgeKeySpecifier | (() => undefined | CareerEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CareerEdgeFieldPolicy,
	},
	AggregateCareer?: {
		keyFields?: false | AggregateCareerKeySpecifier | (() => undefined | AggregateCareerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateCareerFieldPolicy,
	},
	TechnologyLessonUserConnection?: {
		keyFields?: false | TechnologyLessonUserConnectionKeySpecifier | (() => undefined | TechnologyLessonUserConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonUserConnectionFieldPolicy,
	},
	TechnologyLessonUserEdge?: {
		keyFields?: false | TechnologyLessonUserEdgeKeySpecifier | (() => undefined | TechnologyLessonUserEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonUserEdgeFieldPolicy,
	},
	AggregateTechnologyLessonUser?: {
		keyFields?: false | AggregateTechnologyLessonUserKeySpecifier | (() => undefined | AggregateTechnologyLessonUserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTechnologyLessonUserFieldPolicy,
	},
	UserTechnologyConnection?: {
		keyFields?: false | UserTechnologyConnectionKeySpecifier | (() => undefined | UserTechnologyConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserTechnologyConnectionFieldPolicy,
	},
	UserTechnologyEdge?: {
		keyFields?: false | UserTechnologyEdgeKeySpecifier | (() => undefined | UserTechnologyEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserTechnologyEdgeFieldPolicy,
	},
	AggregateUserTechnology?: {
		keyFields?: false | AggregateUserTechnologyKeySpecifier | (() => undefined | AggregateUserTechnologyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateUserTechnologyFieldPolicy,
	},
	TestConnection?: {
		keyFields?: false | TestConnectionKeySpecifier | (() => undefined | TestConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TestConnectionFieldPolicy,
	},
	TestEdge?: {
		keyFields?: false | TestEdgeKeySpecifier | (() => undefined | TestEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TestEdgeFieldPolicy,
	},
	AggregateTest?: {
		keyFields?: false | AggregateTestKeySpecifier | (() => undefined | AggregateTestKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTestFieldPolicy,
	},
	TechnologyConnection?: {
		keyFields?: false | TechnologyConnectionKeySpecifier | (() => undefined | TechnologyConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyConnectionFieldPolicy,
	},
	TechnologyEdge?: {
		keyFields?: false | TechnologyEdgeKeySpecifier | (() => undefined | TechnologyEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyEdgeFieldPolicy,
	},
	AggregateTechnology?: {
		keyFields?: false | AggregateTechnologyKeySpecifier | (() => undefined | AggregateTechnologyKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTechnologyFieldPolicy,
	},
	EthBlockConnection?: {
		keyFields?: false | EthBlockConnectionKeySpecifier | (() => undefined | EthBlockConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthBlockConnectionFieldPolicy,
	},
	EthBlockEdge?: {
		keyFields?: false | EthBlockEdgeKeySpecifier | (() => undefined | EthBlockEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthBlockEdgeFieldPolicy,
	},
	AggregateEthBlock?: {
		keyFields?: false | AggregateEthBlockKeySpecifier | (() => undefined | AggregateEthBlockKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateEthBlockFieldPolicy,
	},
	TeamConnection?: {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamConnectionFieldPolicy,
	},
	TeamEdge?: {
		keyFields?: false | TeamEdgeKeySpecifier | (() => undefined | TeamEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamEdgeFieldPolicy,
	},
	AggregateTeam?: {
		keyFields?: false | AggregateTeamKeySpecifier | (() => undefined | AggregateTeamKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTeamFieldPolicy,
	},
	ProjectConnection?: {
		keyFields?: false | ProjectConnectionKeySpecifier | (() => undefined | ProjectConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectConnectionFieldPolicy,
	},
	ProjectEdge?: {
		keyFields?: false | ProjectEdgeKeySpecifier | (() => undefined | ProjectEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectEdgeFieldPolicy,
	},
	AggregateProject?: {
		keyFields?: false | AggregateProjectKeySpecifier | (() => undefined | AggregateProjectKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateProjectFieldPolicy,
	},
	TemplateConnection?: {
		keyFields?: false | TemplateConnectionKeySpecifier | (() => undefined | TemplateConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TemplateConnectionFieldPolicy,
	},
	TemplateEdge?: {
		keyFields?: false | TemplateEdgeKeySpecifier | (() => undefined | TemplateEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TemplateEdgeFieldPolicy,
	},
	AggregateTemplate?: {
		keyFields?: false | AggregateTemplateKeySpecifier | (() => undefined | AggregateTemplateKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTemplateFieldPolicy,
	},
	ResourceConnection?: {
		keyFields?: false | ResourceConnectionKeySpecifier | (() => undefined | ResourceConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceConnectionFieldPolicy,
	},
	ResourceEdge?: {
		keyFields?: false | ResourceEdgeKeySpecifier | (() => undefined | ResourceEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceEdgeFieldPolicy,
	},
	AggregateResource?: {
		keyFields?: false | AggregateResourceKeySpecifier | (() => undefined | AggregateResourceKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateResourceFieldPolicy,
	},
	ChatMessageConnection?: {
		keyFields?: false | ChatMessageConnectionKeySpecifier | (() => undefined | ChatMessageConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageConnectionFieldPolicy,
	},
	ChatMessageEdge?: {
		keyFields?: false | ChatMessageEdgeKeySpecifier | (() => undefined | ChatMessageEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageEdgeFieldPolicy,
	},
	AggregateChatMessage?: {
		keyFields?: false | AggregateChatMessageKeySpecifier | (() => undefined | AggregateChatMessageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateChatMessageFieldPolicy,
	},
	UserConnection?: {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserEdgeFieldPolicy,
	},
	AggregateUser?: {
		keyFields?: false | AggregateUserKeySpecifier | (() => undefined | AggregateUserKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateUserFieldPolicy,
	},
	ethNet?: {
		keyFields?: false | ethNetKeySpecifier | (() => undefined | ethNetKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ethNetFieldPolicy,
	},
	EthPersonalAccount?: {
		keyFields?: false | EthPersonalAccountKeySpecifier | (() => undefined | EthPersonalAccountKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthPersonalAccountFieldPolicy,
	},
	ethSyncState?: {
		keyFields?: false | ethSyncStateKeySpecifier | (() => undefined | ethSyncStateKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ethSyncStateFieldPolicy,
	},
	Mutation?: {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MutationFieldPolicy,
	},
	ResourceResponse?: {
		keyFields?: false | ResourceResponseKeySpecifier | (() => undefined | ResourceResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceResponseFieldPolicy,
	},
	Error?: {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ErrorFieldPolicy,
	},
	TestResponse?: {
		keyFields?: false | TestResponseKeySpecifier | (() => undefined | TestResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TestResponseFieldPolicy,
	},
	AuthPayload?: {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AuthPayloadFieldPolicy,
	},
	EthAccountResponse?: {
		keyFields?: false | EthAccountResponseKeySpecifier | (() => undefined | EthAccountResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthAccountResponseFieldPolicy,
	},
	CareerResponse?: {
		keyFields?: false | CareerResponseKeySpecifier | (() => undefined | CareerResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CareerResponseFieldPolicy,
	},
	UserTechnologyResponse?: {
		keyFields?: false | UserTechnologyResponseKeySpecifier | (() => undefined | UserTechnologyResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserTechnologyResponseFieldPolicy,
	},
	TechnologyLessonResponse?: {
		keyFields?: false | TechnologyLessonResponseKeySpecifier | (() => undefined | TechnologyLessonResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonResponseFieldPolicy,
	},
	TechnologyResponse?: {
		keyFields?: false | TechnologyResponseKeySpecifier | (() => undefined | TechnologyResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyResponseFieldPolicy,
	},
	CommentResponse?: {
		keyFields?: false | CommentResponseKeySpecifier | (() => undefined | CommentResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CommentResponseFieldPolicy,
	},
	TechnologyLessonUserResponse?: {
		keyFields?: false | TechnologyLessonUserResponseKeySpecifier | (() => undefined | TechnologyLessonUserResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonUserResponseFieldPolicy,
	},
	BatchPayload?: {
		keyFields?: false | BatchPayloadKeySpecifier | (() => undefined | BatchPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BatchPayloadFieldPolicy,
	},
	McJsAuthPayload?: {
		keyFields?: false | McJsAuthPayloadKeySpecifier | (() => undefined | McJsAuthPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: McJsAuthPayloadFieldPolicy,
	},
	UserResponse?: {
		keyFields?: false | UserResponseKeySpecifier | (() => undefined | UserResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserResponseFieldPolicy,
	},
	ResetPasswordResponse?: {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResetPasswordResponseFieldPolicy,
	},
	ResetPassword?: {
		keyFields?: false | ResetPasswordKeySpecifier | (() => undefined | ResetPasswordKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResetPasswordFieldPolicy,
	},
	TemplateResponse?: {
		keyFields?: false | TemplateResponseKeySpecifier | (() => undefined | TemplateResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TemplateResponseFieldPolicy,
	},
	GalleryResponse?: {
		keyFields?: false | GalleryResponseKeySpecifier | (() => undefined | GalleryResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GalleryResponseFieldPolicy,
	},
	ChatRoomResponse?: {
		keyFields?: false | ChatRoomResponseKeySpecifier | (() => undefined | ChatRoomResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomResponseFieldPolicy,
	},
	ChatMessageResponse?: {
		keyFields?: false | ChatMessageResponseKeySpecifier | (() => undefined | ChatMessageResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageResponseFieldPolicy,
	},
	EthTransactionResponse?: {
		keyFields?: false | EthTransactionResponseKeySpecifier | (() => undefined | EthTransactionResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthTransactionResponseFieldPolicy,
	},
	CallRequestResponse?: {
		keyFields?: false | CallRequestResponseKeySpecifier | (() => undefined | CallRequestResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CallRequestResponseFieldPolicy,
	},
	ProjectResponse?: {
		keyFields?: false | ProjectResponseKeySpecifier | (() => undefined | ProjectResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectResponseFieldPolicy,
	},
	TaskResponse?: {
		keyFields?: false | TaskResponseKeySpecifier | (() => undefined | TaskResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskResponseFieldPolicy,
	},
	TaskReactionResponse?: {
		keyFields?: false | TaskReactionResponseKeySpecifier | (() => undefined | TaskReactionResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskReactionResponseFieldPolicy,
	},
	TimerResponse?: {
		keyFields?: false | TimerResponseKeySpecifier | (() => undefined | TimerResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TimerResponseFieldPolicy,
	},
	Subscription?: {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SubscriptionFieldPolicy,
	},
	GallerySubscriptionPayload?: {
		keyFields?: false | GallerySubscriptionPayloadKeySpecifier | (() => undefined | GallerySubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GallerySubscriptionPayloadFieldPolicy,
	},
	GalleryPreviousValues?: {
		keyFields?: false | GalleryPreviousValuesKeySpecifier | (() => undefined | GalleryPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GalleryPreviousValuesFieldPolicy,
	},
	PlayerSubscriptionPayload?: {
		keyFields?: false | PlayerSubscriptionPayloadKeySpecifier | (() => undefined | PlayerSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PlayerSubscriptionPayloadFieldPolicy,
	},
	PlayerPreviousValues?: {
		keyFields?: false | PlayerPreviousValuesKeySpecifier | (() => undefined | PlayerPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PlayerPreviousValuesFieldPolicy,
	},
	WorldSubscriptionPayload?: {
		keyFields?: false | WorldSubscriptionPayloadKeySpecifier | (() => undefined | WorldSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: WorldSubscriptionPayloadFieldPolicy,
	},
	WorldPreviousValues?: {
		keyFields?: false | WorldPreviousValuesKeySpecifier | (() => undefined | WorldPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: WorldPreviousValuesFieldPolicy,
	},
	MessageSubscriptionPayload?: {
		keyFields?: false | MessageSubscriptionPayloadKeySpecifier | (() => undefined | MessageSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MessageSubscriptionPayloadFieldPolicy,
	},
	MessagePreviousValues?: {
		keyFields?: false | MessagePreviousValuesKeySpecifier | (() => undefined | MessagePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MessagePreviousValuesFieldPolicy,
	},
	NoticeSubscriptionPayload?: {
		keyFields?: false | NoticeSubscriptionPayloadKeySpecifier | (() => undefined | NoticeSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NoticeSubscriptionPayloadFieldPolicy,
	},
	NoticePreviousValues?: {
		keyFields?: false | NoticePreviousValuesKeySpecifier | (() => undefined | NoticePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NoticePreviousValuesFieldPolicy,
	},
	ChatMessageReadedSubscriptionPayload?: {
		keyFields?: false | ChatMessageReadedSubscriptionPayloadKeySpecifier | (() => undefined | ChatMessageReadedSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageReadedSubscriptionPayloadFieldPolicy,
	},
	ChatMessageReadedPreviousValues?: {
		keyFields?: false | ChatMessageReadedPreviousValuesKeySpecifier | (() => undefined | ChatMessageReadedPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageReadedPreviousValuesFieldPolicy,
	},
	ChatRoomSubscriptionPayload?: {
		keyFields?: false | ChatRoomSubscriptionPayloadKeySpecifier | (() => undefined | ChatRoomSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomSubscriptionPayloadFieldPolicy,
	},
	ChatRoomPreviousValues?: {
		keyFields?: false | ChatRoomPreviousValuesKeySpecifier | (() => undefined | ChatRoomPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomPreviousValuesFieldPolicy,
	},
	GameSubscriptionPayload?: {
		keyFields?: false | GameSubscriptionPayloadKeySpecifier | (() => undefined | GameSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameSubscriptionPayloadFieldPolicy,
	},
	GamePreviousValues?: {
		keyFields?: false | GamePreviousValuesKeySpecifier | (() => undefined | GamePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GamePreviousValuesFieldPolicy,
	},
	GameResultSubscriptionPayload?: {
		keyFields?: false | GameResultSubscriptionPayloadKeySpecifier | (() => undefined | GameResultSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResultSubscriptionPayloadFieldPolicy,
	},
	GameResultPreviousValues?: {
		keyFields?: false | GameResultPreviousValuesKeySpecifier | (() => undefined | GameResultPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResultPreviousValuesFieldPolicy,
	},
	TournamentSubscriptionPayload?: {
		keyFields?: false | TournamentSubscriptionPayloadKeySpecifier | (() => undefined | TournamentSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentSubscriptionPayloadFieldPolicy,
	},
	TournamentPreviousValues?: {
		keyFields?: false | TournamentPreviousValuesKeySpecifier | (() => undefined | TournamentPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentPreviousValuesFieldPolicy,
	},
	TournamentGroupSubscriptionPayload?: {
		keyFields?: false | TournamentGroupSubscriptionPayloadKeySpecifier | (() => undefined | TournamentGroupSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentGroupSubscriptionPayloadFieldPolicy,
	},
	TournamentGroupPreviousValues?: {
		keyFields?: false | TournamentGroupPreviousValuesKeySpecifier | (() => undefined | TournamentGroupPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentGroupPreviousValuesFieldPolicy,
	},
	TourneySubscriptionPayload?: {
		keyFields?: false | TourneySubscriptionPayloadKeySpecifier | (() => undefined | TourneySubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneySubscriptionPayloadFieldPolicy,
	},
	TourneyPreviousValues?: {
		keyFields?: false | TourneyPreviousValuesKeySpecifier | (() => undefined | TourneyPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyPreviousValuesFieldPolicy,
	},
	EthTransactionSubscriptionPayload?: {
		keyFields?: false | EthTransactionSubscriptionPayloadKeySpecifier | (() => undefined | EthTransactionSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthTransactionSubscriptionPayloadFieldPolicy,
	},
	CallRequestSubscriptionPayload?: {
		keyFields?: false | CallRequestSubscriptionPayloadKeySpecifier | (() => undefined | CallRequestSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CallRequestSubscriptionPayloadFieldPolicy,
	},
	CallRequestPreviousValues?: {
		keyFields?: false | CallRequestPreviousValuesKeySpecifier | (() => undefined | CallRequestPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CallRequestPreviousValuesFieldPolicy,
	},
	PositionSubscriptionPayload?: {
		keyFields?: false | PositionSubscriptionPayloadKeySpecifier | (() => undefined | PositionSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PositionSubscriptionPayloadFieldPolicy,
	},
	PositionPreviousValues?: {
		keyFields?: false | PositionPreviousValuesKeySpecifier | (() => undefined | PositionPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PositionPreviousValuesFieldPolicy,
	},
	ProjectMemberSubscriptionPayload?: {
		keyFields?: false | ProjectMemberSubscriptionPayloadKeySpecifier | (() => undefined | ProjectMemberSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectMemberSubscriptionPayloadFieldPolicy,
	},
	ProjectMemberPreviousValues?: {
		keyFields?: false | ProjectMemberPreviousValuesKeySpecifier | (() => undefined | ProjectMemberPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectMemberPreviousValuesFieldPolicy,
	},
	ServiceSubscriptionPayload?: {
		keyFields?: false | ServiceSubscriptionPayloadKeySpecifier | (() => undefined | ServiceSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceSubscriptionPayloadFieldPolicy,
	},
	ServicePreviousValues?: {
		keyFields?: false | ServicePreviousValuesKeySpecifier | (() => undefined | ServicePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServicePreviousValuesFieldPolicy,
	},
	TaskSubscriptionPayload?: {
		keyFields?: false | TaskSubscriptionPayloadKeySpecifier | (() => undefined | TaskSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskSubscriptionPayloadFieldPolicy,
	},
	TaskPreviousValues?: {
		keyFields?: false | TaskPreviousValuesKeySpecifier | (() => undefined | TaskPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskPreviousValuesFieldPolicy,
	},
	TaskReactionSubscriptionPayload?: {
		keyFields?: false | TaskReactionSubscriptionPayloadKeySpecifier | (() => undefined | TaskReactionSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskReactionSubscriptionPayloadFieldPolicy,
	},
	TaskReactionPreviousValues?: {
		keyFields?: false | TaskReactionPreviousValuesKeySpecifier | (() => undefined | TaskReactionPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskReactionPreviousValuesFieldPolicy,
	},
	TeamMemberSubscriptionPayload?: {
		keyFields?: false | TeamMemberSubscriptionPayloadKeySpecifier | (() => undefined | TeamMemberSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamMemberSubscriptionPayloadFieldPolicy,
	},
	TeamMemberPreviousValues?: {
		keyFields?: false | TeamMemberPreviousValuesKeySpecifier | (() => undefined | TeamMemberPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamMemberPreviousValuesFieldPolicy,
	},
	TimerSubscriptionPayload?: {
		keyFields?: false | TimerSubscriptionPayloadKeySpecifier | (() => undefined | TimerSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TimerSubscriptionPayloadFieldPolicy,
	},
	TimerPreviousValues?: {
		keyFields?: false | TimerPreviousValuesKeySpecifier | (() => undefined | TimerPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TimerPreviousValuesFieldPolicy,
	},
	RouteSubscriptionPayload?: {
		keyFields?: false | RouteSubscriptionPayloadKeySpecifier | (() => undefined | RouteSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RouteSubscriptionPayloadFieldPolicy,
	},
	RoutePreviousValues?: {
		keyFields?: false | RoutePreviousValuesKeySpecifier | (() => undefined | RoutePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RoutePreviousValuesFieldPolicy,
	},
	CodeChallengeSubscriptionPayload?: {
		keyFields?: false | CodeChallengeSubscriptionPayloadKeySpecifier | (() => undefined | CodeChallengeSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeSubscriptionPayloadFieldPolicy,
	},
	CodeChallengePreviousValues?: {
		keyFields?: false | CodeChallengePreviousValuesKeySpecifier | (() => undefined | CodeChallengePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengePreviousValuesFieldPolicy,
	},
	CodeChallengeBlockSubscriptionPayload?: {
		keyFields?: false | CodeChallengeBlockSubscriptionPayloadKeySpecifier | (() => undefined | CodeChallengeBlockSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeBlockSubscriptionPayloadFieldPolicy,
	},
	CodeChallengeBlockPreviousValues?: {
		keyFields?: false | CodeChallengeBlockPreviousValuesKeySpecifier | (() => undefined | CodeChallengeBlockPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CodeChallengeBlockPreviousValuesFieldPolicy,
	},
	CommentSubscriptionPayload?: {
		keyFields?: false | CommentSubscriptionPayloadKeySpecifier | (() => undefined | CommentSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CommentSubscriptionPayloadFieldPolicy,
	},
	CommentPreviousValues?: {
		keyFields?: false | CommentPreviousValuesKeySpecifier | (() => undefined | CommentPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CommentPreviousValuesFieldPolicy,
	},
	TechnologyLessonSubscriptionPayload?: {
		keyFields?: false | TechnologyLessonSubscriptionPayloadKeySpecifier | (() => undefined | TechnologyLessonSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonSubscriptionPayloadFieldPolicy,
	},
	TechnologyLessonPreviousValues?: {
		keyFields?: false | TechnologyLessonPreviousValuesKeySpecifier | (() => undefined | TechnologyLessonPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonPreviousValuesFieldPolicy,
	},
	CareerSubscriptionPayload?: {
		keyFields?: false | CareerSubscriptionPayloadKeySpecifier | (() => undefined | CareerSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CareerSubscriptionPayloadFieldPolicy,
	},
	CareerPreviousValues?: {
		keyFields?: false | CareerPreviousValuesKeySpecifier | (() => undefined | CareerPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: CareerPreviousValuesFieldPolicy,
	},
	TechnologyLessonUserSubscriptionPayload?: {
		keyFields?: false | TechnologyLessonUserSubscriptionPayloadKeySpecifier | (() => undefined | TechnologyLessonUserSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonUserSubscriptionPayloadFieldPolicy,
	},
	TechnologyLessonUserPreviousValues?: {
		keyFields?: false | TechnologyLessonUserPreviousValuesKeySpecifier | (() => undefined | TechnologyLessonUserPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyLessonUserPreviousValuesFieldPolicy,
	},
	UserTechnologySubscriptionPayload?: {
		keyFields?: false | UserTechnologySubscriptionPayloadKeySpecifier | (() => undefined | UserTechnologySubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserTechnologySubscriptionPayloadFieldPolicy,
	},
	UserTechnologyPreviousValues?: {
		keyFields?: false | UserTechnologyPreviousValuesKeySpecifier | (() => undefined | UserTechnologyPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserTechnologyPreviousValuesFieldPolicy,
	},
	TechnologySubscriptionPayload?: {
		keyFields?: false | TechnologySubscriptionPayloadKeySpecifier | (() => undefined | TechnologySubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologySubscriptionPayloadFieldPolicy,
	},
	TechnologyPreviousValues?: {
		keyFields?: false | TechnologyPreviousValuesKeySpecifier | (() => undefined | TechnologyPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TechnologyPreviousValuesFieldPolicy,
	},
	TeamSubscriptionPayload?: {
		keyFields?: false | TeamSubscriptionPayloadKeySpecifier | (() => undefined | TeamSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamSubscriptionPayloadFieldPolicy,
	},
	TeamPreviousValues?: {
		keyFields?: false | TeamPreviousValuesKeySpecifier | (() => undefined | TeamPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamPreviousValuesFieldPolicy,
	},
	ProjectSubscriptionPayload?: {
		keyFields?: false | ProjectSubscriptionPayloadKeySpecifier | (() => undefined | ProjectSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectSubscriptionPayloadFieldPolicy,
	},
	ProjectPreviousValues?: {
		keyFields?: false | ProjectPreviousValuesKeySpecifier | (() => undefined | ProjectPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectPreviousValuesFieldPolicy,
	},
	TemplateSubscriptionPayload?: {
		keyFields?: false | TemplateSubscriptionPayloadKeySpecifier | (() => undefined | TemplateSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TemplateSubscriptionPayloadFieldPolicy,
	},
	TemplatePreviousValues?: {
		keyFields?: false | TemplatePreviousValuesKeySpecifier | (() => undefined | TemplatePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TemplatePreviousValuesFieldPolicy,
	},
	ResourceSubscriptionPayload?: {
		keyFields?: false | ResourceSubscriptionPayloadKeySpecifier | (() => undefined | ResourceSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceSubscriptionPayloadFieldPolicy,
	},
	ResourcePreviousValues?: {
		keyFields?: false | ResourcePreviousValuesKeySpecifier | (() => undefined | ResourcePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourcePreviousValuesFieldPolicy,
	},
	ChatMessageSubscriptionPayload?: {
		keyFields?: false | ChatMessageSubscriptionPayloadKeySpecifier | (() => undefined | ChatMessageSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageSubscriptionPayloadFieldPolicy,
	},
	ChatMessagePreviousValues?: {
		keyFields?: false | ChatMessagePreviousValuesKeySpecifier | (() => undefined | ChatMessagePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessagePreviousValuesFieldPolicy,
	},
	UserSubscriptionPayload?: {
		keyFields?: false | UserSubscriptionPayloadKeySpecifier | (() => undefined | UserSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserSubscriptionPayloadFieldPolicy,
	},
	UserPreviousValues?: {
		keyFields?: false | UserPreviousValuesKeySpecifier | (() => undefined | UserPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserPreviousValuesFieldPolicy,
	},
	ImportResponse?: {
		keyFields?: false | ImportResponseKeySpecifier | (() => undefined | ImportResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ImportResponseFieldPolicy,
	},
	Import?: {
		keyFields?: false | ImportKeySpecifier | (() => undefined | ImportKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ImportFieldPolicy,
	},
	Log?: {
		keyFields?: false | LogKeySpecifier | (() => undefined | LogKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogFieldPolicy,
	},
	AggregateBlock?: {
		keyFields?: false | AggregateBlockKeySpecifier | (() => undefined | AggregateBlockKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateBlockFieldPolicy,
	},
	AggregateChatMessageReaded?: {
		keyFields?: false | AggregateChatMessageReadedKeySpecifier | (() => undefined | AggregateChatMessageReadedKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateChatMessageReadedFieldPolicy,
	},
	AggregateChatRoomInvitation?: {
		keyFields?: false | AggregateChatRoomInvitationKeySpecifier | (() => undefined | AggregateChatRoomInvitationKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateChatRoomInvitationFieldPolicy,
	},
	AggregateFile?: {
		keyFields?: false | AggregateFileKeySpecifier | (() => undefined | AggregateFileKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateFileFieldPolicy,
	},
	AggregateImport?: {
		keyFields?: false | AggregateImportKeySpecifier | (() => undefined | AggregateImportKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateImportFieldPolicy,
	},
	AggregateInventory?: {
		keyFields?: false | AggregateInventoryKeySpecifier | (() => undefined | AggregateInventoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateInventoryFieldPolicy,
	},
	AggregateLetsadsSmsMessageStatus?: {
		keyFields?: false | AggregateLetsadsSmsMessageStatusKeySpecifier | (() => undefined | AggregateLetsadsSmsMessageStatusKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateLetsadsSmsMessageStatusFieldPolicy,
	},
	AggregateLetsadsSmsMessageStatusItem?: {
		keyFields?: false | AggregateLetsadsSmsMessageStatusItemKeySpecifier | (() => undefined | AggregateLetsadsSmsMessageStatusItemKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateLetsadsSmsMessageStatusItemFieldPolicy,
	},
	AggregateLetter?: {
		keyFields?: false | AggregateLetterKeySpecifier | (() => undefined | AggregateLetterKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateLetterFieldPolicy,
	},
	AggregateLog?: {
		keyFields?: false | AggregateLogKeySpecifier | (() => undefined | AggregateLogKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateLogFieldPolicy,
	},
	AggregateLogedIn?: {
		keyFields?: false | AggregateLogedInKeySpecifier | (() => undefined | AggregateLogedInKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateLogedInFieldPolicy,
	},
	AggregateMessage?: {
		keyFields?: false | AggregateMessageKeySpecifier | (() => undefined | AggregateMessageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateMessageFieldPolicy,
	},
	AggregatePlayer?: {
		keyFields?: false | AggregatePlayerKeySpecifier | (() => undefined | AggregatePlayerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregatePlayerFieldPolicy,
	},
	AggregateProjectTask?: {
		keyFields?: false | AggregateProjectTaskKeySpecifier | (() => undefined | AggregateProjectTaskKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateProjectTaskFieldPolicy,
	},
	AggregateResetPassword?: {
		keyFields?: false | AggregateResetPasswordKeySpecifier | (() => undefined | AggregateResetPasswordKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateResetPasswordFieldPolicy,
	},
	AggregateServiceCategory?: {
		keyFields?: false | AggregateServiceCategoryKeySpecifier | (() => undefined | AggregateServiceCategoryKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateServiceCategoryFieldPolicy,
	},
	AggregateSettings?: {
		keyFields?: false | AggregateSettingsKeySpecifier | (() => undefined | AggregateSettingsKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateSettingsFieldPolicy,
	},
	AggregateSmsMessage?: {
		keyFields?: false | AggregateSmsMessageKeySpecifier | (() => undefined | AggregateSmsMessageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateSmsMessageFieldPolicy,
	},
	AggregateSmsProvider?: {
		keyFields?: false | AggregateSmsProviderKeySpecifier | (() => undefined | AggregateSmsProviderKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateSmsProviderFieldPolicy,
	},
	AggregateTaskMember?: {
		keyFields?: false | AggregateTaskMemberKeySpecifier | (() => undefined | AggregateTaskMemberKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTaskMemberFieldPolicy,
	},
	AggregateTourneyPlayer?: {
		keyFields?: false | AggregateTourneyPlayerKeySpecifier | (() => undefined | AggregateTourneyPlayerKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateTourneyPlayerFieldPolicy,
	},
	AggregateUserGroup?: {
		keyFields?: false | AggregateUserGroupKeySpecifier | (() => undefined | AggregateUserGroupKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: AggregateUserGroupFieldPolicy,
	},
	BlockConnection?: {
		keyFields?: false | BlockConnectionKeySpecifier | (() => undefined | BlockConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BlockConnectionFieldPolicy,
	},
	BlockEdge?: {
		keyFields?: false | BlockEdgeKeySpecifier | (() => undefined | BlockEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BlockEdgeFieldPolicy,
	},
	BlockPreviousValues?: {
		keyFields?: false | BlockPreviousValuesKeySpecifier | (() => undefined | BlockPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BlockPreviousValuesFieldPolicy,
	},
	BlockSubscriptionPayload?: {
		keyFields?: false | BlockSubscriptionPayloadKeySpecifier | (() => undefined | BlockSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: BlockSubscriptionPayloadFieldPolicy,
	},
	ChatMessageReadedConnection?: {
		keyFields?: false | ChatMessageReadedConnectionKeySpecifier | (() => undefined | ChatMessageReadedConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageReadedConnectionFieldPolicy,
	},
	ChatMessageReadedEdge?: {
		keyFields?: false | ChatMessageReadedEdgeKeySpecifier | (() => undefined | ChatMessageReadedEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageReadedEdgeFieldPolicy,
	},
	ChatRoomInvitationConnection?: {
		keyFields?: false | ChatRoomInvitationConnectionKeySpecifier | (() => undefined | ChatRoomInvitationConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomInvitationConnectionFieldPolicy,
	},
	ChatRoomInvitationEdge?: {
		keyFields?: false | ChatRoomInvitationEdgeKeySpecifier | (() => undefined | ChatRoomInvitationEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomInvitationEdgeFieldPolicy,
	},
	ChatRoomInvitationPreviousValues?: {
		keyFields?: false | ChatRoomInvitationPreviousValuesKeySpecifier | (() => undefined | ChatRoomInvitationPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomInvitationPreviousValuesFieldPolicy,
	},
	ChatRoomInvitationSubscriptionPayload?: {
		keyFields?: false | ChatRoomInvitationSubscriptionPayloadKeySpecifier | (() => undefined | ChatRoomInvitationSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatRoomInvitationSubscriptionPayloadFieldPolicy,
	},
	EthAccountPreviousValues?: {
		keyFields?: false | EthAccountPreviousValuesKeySpecifier | (() => undefined | EthAccountPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthAccountPreviousValuesFieldPolicy,
	},
	EthAccountSubscriptionPayload?: {
		keyFields?: false | EthAccountSubscriptionPayloadKeySpecifier | (() => undefined | EthAccountSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthAccountSubscriptionPayloadFieldPolicy,
	},
	EthBlockPreviousValues?: {
		keyFields?: false | EthBlockPreviousValuesKeySpecifier | (() => undefined | EthBlockPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthBlockPreviousValuesFieldPolicy,
	},
	EthBlockSubscriptionPayload?: {
		keyFields?: false | EthBlockSubscriptionPayloadKeySpecifier | (() => undefined | EthBlockSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthBlockSubscriptionPayloadFieldPolicy,
	},
	EthContractSourcePreviousValues?: {
		keyFields?: false | EthContractSourcePreviousValuesKeySpecifier | (() => undefined | EthContractSourcePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthContractSourcePreviousValuesFieldPolicy,
	},
	EthContractSourceSubscriptionPayload?: {
		keyFields?: false | EthContractSourceSubscriptionPayloadKeySpecifier | (() => undefined | EthContractSourceSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthContractSourceSubscriptionPayloadFieldPolicy,
	},
	EthTransactionPreviousValues?: {
		keyFields?: false | EthTransactionPreviousValuesKeySpecifier | (() => undefined | EthTransactionPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthTransactionPreviousValuesFieldPolicy,
	},
	FileConnection?: {
		keyFields?: false | FileConnectionKeySpecifier | (() => undefined | FileConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FileConnectionFieldPolicy,
	},
	FileEdge?: {
		keyFields?: false | FileEdgeKeySpecifier | (() => undefined | FileEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FileEdgeFieldPolicy,
	},
	FilePreviousValues?: {
		keyFields?: false | FilePreviousValuesKeySpecifier | (() => undefined | FilePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FilePreviousValuesFieldPolicy,
	},
	FileSubscriptionPayload?: {
		keyFields?: false | FileSubscriptionPayloadKeySpecifier | (() => undefined | FileSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FileSubscriptionPayloadFieldPolicy,
	},
	ImportConnection?: {
		keyFields?: false | ImportConnectionKeySpecifier | (() => undefined | ImportConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ImportConnectionFieldPolicy,
	},
	ImportEdge?: {
		keyFields?: false | ImportEdgeKeySpecifier | (() => undefined | ImportEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ImportEdgeFieldPolicy,
	},
	ImportPreviousValues?: {
		keyFields?: false | ImportPreviousValuesKeySpecifier | (() => undefined | ImportPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ImportPreviousValuesFieldPolicy,
	},
	ImportSubscriptionPayload?: {
		keyFields?: false | ImportSubscriptionPayloadKeySpecifier | (() => undefined | ImportSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ImportSubscriptionPayloadFieldPolicy,
	},
	InventoryConnection?: {
		keyFields?: false | InventoryConnectionKeySpecifier | (() => undefined | InventoryConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: InventoryConnectionFieldPolicy,
	},
	InventoryEdge?: {
		keyFields?: false | InventoryEdgeKeySpecifier | (() => undefined | InventoryEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: InventoryEdgeFieldPolicy,
	},
	InventoryPreviousValues?: {
		keyFields?: false | InventoryPreviousValuesKeySpecifier | (() => undefined | InventoryPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: InventoryPreviousValuesFieldPolicy,
	},
	InventorySubscriptionPayload?: {
		keyFields?: false | InventorySubscriptionPayloadKeySpecifier | (() => undefined | InventorySubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: InventorySubscriptionPayloadFieldPolicy,
	},
	LetsadsSmsMessageStatus?: {
		keyFields?: false | LetsadsSmsMessageStatusKeySpecifier | (() => undefined | LetsadsSmsMessageStatusKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusFieldPolicy,
	},
	SmsMessage?: {
		keyFields?: false | SmsMessageKeySpecifier | (() => undefined | SmsMessageKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsMessageFieldPolicy,
	},
	SmsProvider?: {
		keyFields?: false | SmsProviderKeySpecifier | (() => undefined | SmsProviderKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsProviderFieldPolicy,
	},
	LetsadsSmsMessageStatusItem?: {
		keyFields?: false | LetsadsSmsMessageStatusItemKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusItemFieldPolicy,
	},
	LetsadsSmsMessageStatusConnection?: {
		keyFields?: false | LetsadsSmsMessageStatusConnectionKeySpecifier | (() => undefined | LetsadsSmsMessageStatusConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusConnectionFieldPolicy,
	},
	LetsadsSmsMessageStatusEdge?: {
		keyFields?: false | LetsadsSmsMessageStatusEdgeKeySpecifier | (() => undefined | LetsadsSmsMessageStatusEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusEdgeFieldPolicy,
	},
	LetsadsSmsMessageStatusItemConnection?: {
		keyFields?: false | LetsadsSmsMessageStatusItemConnectionKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusItemConnectionFieldPolicy,
	},
	LetsadsSmsMessageStatusItemEdge?: {
		keyFields?: false | LetsadsSmsMessageStatusItemEdgeKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusItemEdgeFieldPolicy,
	},
	LetsadsSmsMessageStatusItemPreviousValues?: {
		keyFields?: false | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusItemPreviousValuesFieldPolicy,
	},
	LetsadsSmsMessageStatusItemSubscriptionPayload?: {
		keyFields?: false | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusItemSubscriptionPayloadFieldPolicy,
	},
	LetsadsSmsMessageStatusPreviousValues?: {
		keyFields?: false | LetsadsSmsMessageStatusPreviousValuesKeySpecifier | (() => undefined | LetsadsSmsMessageStatusPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusPreviousValuesFieldPolicy,
	},
	LetsadsSmsMessageStatusSubscriptionPayload?: {
		keyFields?: false | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier | (() => undefined | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetsadsSmsMessageStatusSubscriptionPayloadFieldPolicy,
	},
	Letter?: {
		keyFields?: false | LetterKeySpecifier | (() => undefined | LetterKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetterFieldPolicy,
	},
	LetterConnection?: {
		keyFields?: false | LetterConnectionKeySpecifier | (() => undefined | LetterConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetterConnectionFieldPolicy,
	},
	LetterEdge?: {
		keyFields?: false | LetterEdgeKeySpecifier | (() => undefined | LetterEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetterEdgeFieldPolicy,
	},
	LetterPreviousValues?: {
		keyFields?: false | LetterPreviousValuesKeySpecifier | (() => undefined | LetterPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetterPreviousValuesFieldPolicy,
	},
	LetterSubscriptionPayload?: {
		keyFields?: false | LetterSubscriptionPayloadKeySpecifier | (() => undefined | LetterSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LetterSubscriptionPayloadFieldPolicy,
	},
	LogConnection?: {
		keyFields?: false | LogConnectionKeySpecifier | (() => undefined | LogConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogConnectionFieldPolicy,
	},
	LogEdge?: {
		keyFields?: false | LogEdgeKeySpecifier | (() => undefined | LogEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogEdgeFieldPolicy,
	},
	LogedInConnection?: {
		keyFields?: false | LogedInConnectionKeySpecifier | (() => undefined | LogedInConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogedInConnectionFieldPolicy,
	},
	LogedInEdge?: {
		keyFields?: false | LogedInEdgeKeySpecifier | (() => undefined | LogedInEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogedInEdgeFieldPolicy,
	},
	LogedInPreviousValues?: {
		keyFields?: false | LogedInPreviousValuesKeySpecifier | (() => undefined | LogedInPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogedInPreviousValuesFieldPolicy,
	},
	LogedInSubscriptionPayload?: {
		keyFields?: false | LogedInSubscriptionPayloadKeySpecifier | (() => undefined | LogedInSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogedInSubscriptionPayloadFieldPolicy,
	},
	LogPreviousValues?: {
		keyFields?: false | LogPreviousValuesKeySpecifier | (() => undefined | LogPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogPreviousValuesFieldPolicy,
	},
	LogSubscriptionPayload?: {
		keyFields?: false | LogSubscriptionPayloadKeySpecifier | (() => undefined | LogSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: LogSubscriptionPayloadFieldPolicy,
	},
	MessageConnection?: {
		keyFields?: false | MessageConnectionKeySpecifier | (() => undefined | MessageConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MessageConnectionFieldPolicy,
	},
	MessageEdge?: {
		keyFields?: false | MessageEdgeKeySpecifier | (() => undefined | MessageEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MessageEdgeFieldPolicy,
	},
	NotificationTypePreviousValues?: {
		keyFields?: false | NotificationTypePreviousValuesKeySpecifier | (() => undefined | NotificationTypePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NotificationTypePreviousValuesFieldPolicy,
	},
	NotificationTypeSubscriptionPayload?: {
		keyFields?: false | NotificationTypeSubscriptionPayloadKeySpecifier | (() => undefined | NotificationTypeSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: NotificationTypeSubscriptionPayloadFieldPolicy,
	},
	PlayerConnection?: {
		keyFields?: false | PlayerConnectionKeySpecifier | (() => undefined | PlayerConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PlayerConnectionFieldPolicy,
	},
	PlayerEdge?: {
		keyFields?: false | PlayerEdgeKeySpecifier | (() => undefined | PlayerEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PlayerEdgeFieldPolicy,
	},
	ProjectTaskConnection?: {
		keyFields?: false | ProjectTaskConnectionKeySpecifier | (() => undefined | ProjectTaskConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectTaskConnectionFieldPolicy,
	},
	ProjectTaskEdge?: {
		keyFields?: false | ProjectTaskEdgeKeySpecifier | (() => undefined | ProjectTaskEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectTaskEdgeFieldPolicy,
	},
	ProjectTaskPreviousValues?: {
		keyFields?: false | ProjectTaskPreviousValuesKeySpecifier | (() => undefined | ProjectTaskPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectTaskPreviousValuesFieldPolicy,
	},
	ProjectTaskSubscriptionPayload?: {
		keyFields?: false | ProjectTaskSubscriptionPayloadKeySpecifier | (() => undefined | ProjectTaskSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectTaskSubscriptionPayloadFieldPolicy,
	},
	ResetPasswordConnection?: {
		keyFields?: false | ResetPasswordConnectionKeySpecifier | (() => undefined | ResetPasswordConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResetPasswordConnectionFieldPolicy,
	},
	ResetPasswordEdge?: {
		keyFields?: false | ResetPasswordEdgeKeySpecifier | (() => undefined | ResetPasswordEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResetPasswordEdgeFieldPolicy,
	},
	ResetPasswordPreviousValues?: {
		keyFields?: false | ResetPasswordPreviousValuesKeySpecifier | (() => undefined | ResetPasswordPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResetPasswordPreviousValuesFieldPolicy,
	},
	ResetPasswordSubscriptionPayload?: {
		keyFields?: false | ResetPasswordSubscriptionPayloadKeySpecifier | (() => undefined | ResetPasswordSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResetPasswordSubscriptionPayloadFieldPolicy,
	},
	ResourceTagPreviousValues?: {
		keyFields?: false | ResourceTagPreviousValuesKeySpecifier | (() => undefined | ResourceTagPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceTagPreviousValuesFieldPolicy,
	},
	ResourceTagSubscriptionPayload?: {
		keyFields?: false | ResourceTagSubscriptionPayloadKeySpecifier | (() => undefined | ResourceTagSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ResourceTagSubscriptionPayloadFieldPolicy,
	},
	ServiceCategoryConnection?: {
		keyFields?: false | ServiceCategoryConnectionKeySpecifier | (() => undefined | ServiceCategoryConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceCategoryConnectionFieldPolicy,
	},
	ServiceCategoryEdge?: {
		keyFields?: false | ServiceCategoryEdgeKeySpecifier | (() => undefined | ServiceCategoryEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceCategoryEdgeFieldPolicy,
	},
	ServiceCategoryPreviousValues?: {
		keyFields?: false | ServiceCategoryPreviousValuesKeySpecifier | (() => undefined | ServiceCategoryPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceCategoryPreviousValuesFieldPolicy,
	},
	ServiceCategorySubscriptionPayload?: {
		keyFields?: false | ServiceCategorySubscriptionPayloadKeySpecifier | (() => undefined | ServiceCategorySubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceCategorySubscriptionPayloadFieldPolicy,
	},
	SettingsConnection?: {
		keyFields?: false | SettingsConnectionKeySpecifier | (() => undefined | SettingsConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SettingsConnectionFieldPolicy,
	},
	SettingsEdge?: {
		keyFields?: false | SettingsEdgeKeySpecifier | (() => undefined | SettingsEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SettingsEdgeFieldPolicy,
	},
	SettingsPreviousValues?: {
		keyFields?: false | SettingsPreviousValuesKeySpecifier | (() => undefined | SettingsPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SettingsPreviousValuesFieldPolicy,
	},
	SettingsSubscriptionPayload?: {
		keyFields?: false | SettingsSubscriptionPayloadKeySpecifier | (() => undefined | SettingsSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SettingsSubscriptionPayloadFieldPolicy,
	},
	SmsMessageConnection?: {
		keyFields?: false | SmsMessageConnectionKeySpecifier | (() => undefined | SmsMessageConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsMessageConnectionFieldPolicy,
	},
	SmsMessageEdge?: {
		keyFields?: false | SmsMessageEdgeKeySpecifier | (() => undefined | SmsMessageEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsMessageEdgeFieldPolicy,
	},
	SmsMessagePreviousValues?: {
		keyFields?: false | SmsMessagePreviousValuesKeySpecifier | (() => undefined | SmsMessagePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsMessagePreviousValuesFieldPolicy,
	},
	SmsMessageSubscriptionPayload?: {
		keyFields?: false | SmsMessageSubscriptionPayloadKeySpecifier | (() => undefined | SmsMessageSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsMessageSubscriptionPayloadFieldPolicy,
	},
	SmsProviderConnection?: {
		keyFields?: false | SmsProviderConnectionKeySpecifier | (() => undefined | SmsProviderConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsProviderConnectionFieldPolicy,
	},
	SmsProviderEdge?: {
		keyFields?: false | SmsProviderEdgeKeySpecifier | (() => undefined | SmsProviderEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsProviderEdgeFieldPolicy,
	},
	SmsProviderPreviousValues?: {
		keyFields?: false | SmsProviderPreviousValuesKeySpecifier | (() => undefined | SmsProviderPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsProviderPreviousValuesFieldPolicy,
	},
	SmsProviderSubscriptionPayload?: {
		keyFields?: false | SmsProviderSubscriptionPayloadKeySpecifier | (() => undefined | SmsProviderSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsProviderSubscriptionPayloadFieldPolicy,
	},
	TagPreviousValues?: {
		keyFields?: false | TagPreviousValuesKeySpecifier | (() => undefined | TagPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TagPreviousValuesFieldPolicy,
	},
	TagSubscriptionPayload?: {
		keyFields?: false | TagSubscriptionPayloadKeySpecifier | (() => undefined | TagSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TagSubscriptionPayloadFieldPolicy,
	},
	TaskMemberConnection?: {
		keyFields?: false | TaskMemberConnectionKeySpecifier | (() => undefined | TaskMemberConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskMemberConnectionFieldPolicy,
	},
	TaskMemberEdge?: {
		keyFields?: false | TaskMemberEdgeKeySpecifier | (() => undefined | TaskMemberEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskMemberEdgeFieldPolicy,
	},
	TaskMemberPreviousValues?: {
		keyFields?: false | TaskMemberPreviousValuesKeySpecifier | (() => undefined | TaskMemberPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskMemberPreviousValuesFieldPolicy,
	},
	TaskMemberSubscriptionPayload?: {
		keyFields?: false | TaskMemberSubscriptionPayloadKeySpecifier | (() => undefined | TaskMemberSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TaskMemberSubscriptionPayloadFieldPolicy,
	},
	TestPreviousValues?: {
		keyFields?: false | TestPreviousValuesKeySpecifier | (() => undefined | TestPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TestPreviousValuesFieldPolicy,
	},
	TestSubscriptionPayload?: {
		keyFields?: false | TestSubscriptionPayloadKeySpecifier | (() => undefined | TestSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TestSubscriptionPayloadFieldPolicy,
	},
	TourneyPlayerConnection?: {
		keyFields?: false | TourneyPlayerConnectionKeySpecifier | (() => undefined | TourneyPlayerConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyPlayerConnectionFieldPolicy,
	},
	TourneyPlayerEdge?: {
		keyFields?: false | TourneyPlayerEdgeKeySpecifier | (() => undefined | TourneyPlayerEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyPlayerEdgeFieldPolicy,
	},
	TourneyPlayerPreviousValues?: {
		keyFields?: false | TourneyPlayerPreviousValuesKeySpecifier | (() => undefined | TourneyPlayerPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyPlayerPreviousValuesFieldPolicy,
	},
	TourneyPlayerSubscriptionPayload?: {
		keyFields?: false | TourneyPlayerSubscriptionPayloadKeySpecifier | (() => undefined | TourneyPlayerSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyPlayerSubscriptionPayloadFieldPolicy,
	},
	UserGroupConnection?: {
		keyFields?: false | UserGroupConnectionKeySpecifier | (() => undefined | UserGroupConnectionKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserGroupConnectionFieldPolicy,
	},
	UserGroupEdge?: {
		keyFields?: false | UserGroupEdgeKeySpecifier | (() => undefined | UserGroupEdgeKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserGroupEdgeFieldPolicy,
	},
	UserGroupPreviousValues?: {
		keyFields?: false | UserGroupPreviousValuesKeySpecifier | (() => undefined | UserGroupPreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserGroupPreviousValuesFieldPolicy,
	},
	UserGroupSubscriptionPayload?: {
		keyFields?: false | UserGroupSubscriptionPayloadKeySpecifier | (() => undefined | UserGroupSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: UserGroupSubscriptionPayloadFieldPolicy,
	},
	VotePreviousValues?: {
		keyFields?: false | VotePreviousValuesKeySpecifier | (() => undefined | VotePreviousValuesKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: VotePreviousValuesFieldPolicy,
	},
	VoteSubscriptionPayload?: {
		keyFields?: false | VoteSubscriptionPayloadKeySpecifier | (() => undefined | VoteSubscriptionPayloadKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: VoteSubscriptionPayloadFieldPolicy,
	},
	FileResponse?: {
		keyFields?: false | FileResponseKeySpecifier | (() => undefined | FileResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: FileResponseFieldPolicy,
	},
	SmsMessageResponse?: {
		keyFields?: false | SmsMessageResponseKeySpecifier | (() => undefined | SmsMessageResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsMessageResponseFieldPolicy,
	},
	SmsProviderResponse?: {
		keyFields?: false | SmsProviderResponseKeySpecifier | (() => undefined | SmsProviderResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: SmsProviderResponseFieldPolicy,
	},
	MarketplaceAuthResponse?: {
		keyFields?: false | MarketplaceAuthResponseKeySpecifier | (() => undefined | MarketplaceAuthResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: MarketplaceAuthResponseFieldPolicy,
	},
	GameResponse?: {
		keyFields?: false | GameResponseKeySpecifier | (() => undefined | GameResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResponseFieldPolicy,
	},
	GameResultResponse?: {
		keyFields?: false | GameResultResponseKeySpecifier | (() => undefined | GameResultResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: GameResultResponseFieldPolicy,
	},
	TournamentResponse?: {
		keyFields?: false | TournamentResponseKeySpecifier | (() => undefined | TournamentResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentResponseFieldPolicy,
	},
	TournamentGroupResponse?: {
		keyFields?: false | TournamentGroupResponseKeySpecifier | (() => undefined | TournamentGroupResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TournamentGroupResponseFieldPolicy,
	},
	TourneyResponse?: {
		keyFields?: false | TourneyResponseKeySpecifier | (() => undefined | TourneyResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TourneyResponseFieldPolicy,
	},
	ChatMessageReadedResponse?: {
		keyFields?: false | ChatMessageReadedResponseKeySpecifier | (() => undefined | ChatMessageReadedResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ChatMessageReadedResponseFieldPolicy,
	},
	EthBlockResponse?: {
		keyFields?: false | EthBlockResponseKeySpecifier | (() => undefined | EthBlockResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthBlockResponseFieldPolicy,
	},
	EthContractSourceResponse?: {
		keyFields?: false | EthContractSourceResponseKeySpecifier | (() => undefined | EthContractSourceResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthContractSourceResponseFieldPolicy,
	},
	EthPersonalAccountResponse?: {
		keyFields?: false | EthPersonalAccountResponseKeySpecifier | (() => undefined | EthPersonalAccountResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: EthPersonalAccountResponseFieldPolicy,
	},
	IceCandidate?: {
		keyFields?: false | IceCandidateKeySpecifier | (() => undefined | IceCandidateKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: IceCandidateFieldPolicy,
	},
	PositionResponse?: {
		keyFields?: false | PositionResponseKeySpecifier | (() => undefined | PositionResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: PositionResponseFieldPolicy,
	},
	ProjectMemberResponse?: {
		keyFields?: false | ProjectMemberResponseKeySpecifier | (() => undefined | ProjectMemberResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ProjectMemberResponseFieldPolicy,
	},
	ServiceResponse?: {
		keyFields?: false | ServiceResponseKeySpecifier | (() => undefined | ServiceResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceResponseFieldPolicy,
	},
	ServiceCategoryResponse?: {
		keyFields?: false | ServiceCategoryResponseKeySpecifier | (() => undefined | ServiceCategoryResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: ServiceCategoryResponseFieldPolicy,
	},
	TeamResponse?: {
		keyFields?: false | TeamResponseKeySpecifier | (() => undefined | TeamResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamResponseFieldPolicy,
	},
	TeamMemberResponse?: {
		keyFields?: false | TeamMemberResponseKeySpecifier | (() => undefined | TeamMemberResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: TeamMemberResponseFieldPolicy,
	},
	RouteResponse?: {
		keyFields?: false | RouteResponseKeySpecifier | (() => undefined | RouteResponseKeySpecifier),
		queryType?: true,
		mutationType?: true,
		subscriptionType?: true,
		fields?: RouteResponseFieldPolicy,
	}
};