import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type QueryKeySpecifier = ('apiSchema' | 'galleries' | 'userGroups' | 'worlds' | 'notices' | 'notificationTypes' | 'resourceTags' | 'tags' | 'votes' | 'chatRooms' | 'games' | 'gameResults' | 'tournaments' | 'tournamentGroups' | 'tourneys' | 'ethAccounts' | 'ethContractSources' | 'ethTransactions' | 'callRequests' | 'positions' | 'projectMembers' | 'services' | 'tasks' | 'taskReactions' | 'teamMembers' | 'timers' | 'routes' | 'codeChallenges' | 'codeChallengeBlocks' | 'codeChallengeCompletions' | 'comments' | 'technologyLessons' | 'careers' | 'technologyLessonUsers' | 'userTechnologies' | 'tests' | 'technologies' | 'ethBlocks' | 'teams' | 'projects' | 'templates' | 'resources' | 'chatMessages' | 'users' | 'gallery' | 'world' | 'notice' | 'notificationType' | 'resourceTag' | 'tag' | 'vote' | 'chatRoom' | 'game' | 'gameResult' | 'tournament' | 'tournamentGroup' | 'tourney' | 'ethAccount' | 'ethContractSource' | 'ethTransaction' | 'position' | 'projectMember' | 'service' | 'task' | 'taskReaction' | 'teamMember' | 'timer' | 'route' | 'codeChallenge' | 'codeChallengeBlock' | 'codeChallengeCompletion' | 'comment' | 'technologyLesson' | 'career' | 'technologyLessonUser' | 'userTechnology' | 'test' | 'file' | 'technology' | 'ethBlock' | 'team' | 'project' | 'template' | 'resource' | 'chatMessage' | 'user' | 'galleriesConnection' | 'worldsConnection' | 'noticesConnection' | 'notificationTypesConnection' | 'resourceTagsConnection' | 'tagsConnection' | 'votesConnection' | 'chatRoomsConnection' | 'gamesConnection' | 'gameResultsConnection' | 'tournamentsConnection' | 'tournamentGroupsConnection' | 'tourneysConnection' | 'ethAccountsConnection' | 'ethContractSourcesConnection' | 'ethTransactionsConnection' | 'callRequestsConnection' | 'positionsConnection' | 'projectMembersConnection' | 'servicesConnection' | 'tasksConnection' | 'taskReactionsConnection' | 'teamMembersConnection' | 'timersConnection' | 'routesConnection' | 'codeChallengesConnection' | 'codeChallengeBlocksConnection' | 'codeChallengeCompletionsConnection' | 'commentsConnection' | 'technologyLessonsConnection' | 'careersConnection' | 'technologyLessonUsersConnection' | 'userTechnologiesConnection' | 'testsConnection' | 'technologiesConnection' | 'ethBlocksConnection' | 'teamsConnection' | 'projectsConnection' | 'templatesConnection' | 'resourcesConnection' | 'chatMessagesConnection' | 'usersConnection' | 'myWorlds' | 'me' | 'ethNet' | 'ethCoinbase' | 'ethPersonalAccounts' | 'ethBalance' | 'ethTransactionCount' | 'ethSyncState' | 'ethGetBlockNumber' | 'ethGetBlock' | 'ethGetBlockTransactionCount' | 'ethGetTransaction' | QueryKeySpecifier)[];
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
	codeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
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
	codeChallengeCompletion?: FieldPolicy<any> | FieldReadFunction<any>,
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
	codeChallengeCompletionsConnection?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type UserKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'username' | 'email' | 'phone' | 'showEmail' | 'showPhone' | 'password' | 'fullname' | 'image' | 'address' | 'sudo' | 'active' | 'activated' | 'deleted' | 'Groups' | 'CreatedUsers' | 'CreatedBy' | 'LogedIns' | 'Resources' | 'Votes' | 'NotificationTypes' | 'NotificationTypesCreated' | 'Tags' | 'ResourceTags' | 'EthContractSourcesCreated' | 'EthAccounts' | 'Teams' | 'TeamsCreated' | 'Projects' | 'ProjectsCreated' | 'Tasks' | 'Timers' | 'PrismaProjects' | 'CodeChallengeCompletions' | 'hasEmail' | 'hasPhone' | 'marketplaceToken' | 'hidden' | 'EthAccountAuthed' | 'worlds' | 'settings' | UserKeySpecifier)[];
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
	CodeChallengeCompletions?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type ResourceKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'type' | 'name' | 'longtitle' | 'content' | 'components' | 'contentText' | 'published' | 'deleted' | 'hidemenu' | 'searchable' | 'uri' | 'isfolder' | 'CreatedBy' | 'Parent' | 'Childs' | 'Image' | 'rating' | 'positiveVotesCount' | 'negativeVotesCount' | 'neutralVotesCount' | 'CommentTarget' | 'Topic' | 'Comments' | 'Votes' | 'Tags' | 'oldID' | 'commentOldID' | 'Topics' | 'Blog' | 'Service' | 'Project' | 'Team' | 'class_key' | 'template' | 'mockUpdate' | 'Galleries' | 'CodeChallenge' | ResourceKeySpecifier)[];
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
	Galleries?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ProjectKeySpecifier = ('id' | 'name' | 'domain' | 'PrismaTemplates' | 'PrismaUsers' | 'PrismaResources' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'Members' | 'CreatedBy' | 'ProjectTasks' | 'Team' | 'Customers' | 'ChatRoom' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'Image' | 'Resource' | 'type' | 'EthAccounts' | ProjectKeySpecifier)[];
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
	type?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type TaskKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'content' | 'status' | 'TaskProjects' | 'CreatedBy' | 'Members' | 'Parent' | 'Childs' | 'RelatedFrom' | 'RelatedTo' | 'startDatePlaning' | 'endDatePlaning' | 'startDate' | 'endDate' | 'Timers' | 'Reactions' | 'ChatRoom' | 'CodeChallengeCompletion' | TaskKeySpecifier)[];
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
	ChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallengeCompletion?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CodeChallengeCompletionKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'CreatedBy' | 'CodeChallenge' | 'Task' | 'content' | 'success' | CodeChallengeCompletionKeySpecifier)[];
export type CodeChallengeCompletionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	CreatedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	CodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	Task?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeKeySpecifier = ('id' | 'externalKey' | 'createdAt' | 'updatedAt' | 'name' | 'dashedName' | 'localeTitle' | 'description' | 'challengeType' | 'forumTopicId' | 'translations' | 'tests' | 'solutions' | 'instructions' | 'files' | 'videoUrl' | 'order' | 'superOrder' | 'challengeOrder' | 'required' | 'isRequired' | 'isPrivate' | 'isBeta' | 'template' | 'time' | 'CreatedBy' | 'rank' | 'Block' | 'Completions' | 'Topic' | CodeChallengeKeySpecifier)[];
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
	Block?: FieldPolicy<any> | FieldReadFunction<any>,
	Completions?: FieldPolicy<any> | FieldReadFunction<any>,
	Topic?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CodeChallengeCompletionConnectionKeySpecifier = ('pageInfo' | 'edges' | 'aggregate' | CodeChallengeCompletionConnectionKeySpecifier)[];
export type CodeChallengeCompletionConnectionFieldPolicy = {
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeCompletionEdgeKeySpecifier = ('node' | 'cursor' | CodeChallengeCompletionEdgeKeySpecifier)[];
export type CodeChallengeCompletionEdgeFieldPolicy = {
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	cursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AggregateCodeChallengeCompletionKeySpecifier = ('count' | AggregateCodeChallengeCompletionKeySpecifier)[];
export type AggregateCodeChallengeCompletionFieldPolicy = {
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
export type MutationKeySpecifier = ('createBlogProcessor' | 'updateBlogProcessor' | 'createTopicProcessor' | 'updateTopicProcessor' | 'createCommentProcessor' | 'updateCommentProcessor' | 'createTestProcessor' | 'updateTestProcessor' | 'ethSigninOrSignup' | 'ethConnectAuthAccount' | 'createCodeChallengeCompletionProcessor' | 'updateCodeChallengeCompletionProcessor' | 'fccImportChallengs' | 'createCareerProcessor' | 'updateCareerProcessor' | 'createUserTechnologyProcessor' | 'updateUserTechnologyProcessor' | 'createTechnologyLessonProcessor' | 'updateTechnologyLessonProcessor' | 'createTechnologyProcessor' | 'updateTechnologyProcessor' | 'createTechnologyLessonCommentProcessor' | 'updateTechnologyLessonCommentProcessor' | 'createTechnologyLessonUserProcessor' | 'updateTechnologyLessonUserProcessor' | 'createPlayer' | 'createWorld' | 'createSettings' | 'createCallRequest' | 'createUser' | 'updatePlayer' | 'updateWorld' | 'updateSettings' | 'updateCallRequest' | 'updateUser' | 'deleteGallery' | 'deleteWorld' | 'deleteNotice' | 'deleteGame' | 'deleteGameResult' | 'deleteTournament' | 'deleteTournamentGroup' | 'deleteTourney' | 'deleteProjectMember' | 'deleteTaskReaction' | 'deleteTeamMember' | 'deleteRoute' | 'deleteCodeChallenge' | 'deleteCodeChallengeBlock' | 'deleteTechnologyLesson' | 'deleteCareer' | 'deleteTechnologyLessonUser' | 'deleteUserTechnology' | 'deleteTest' | 'deleteFile' | 'deleteTechnology' | 'deleteTemplate' | 'deleteResource' | 'deleteUser' | 'deleteManyNotices' | 'deleteManyRoutes' | 'deleteManyTests' | 'runCommand' | 'login' | 'createFileProcessor' | 'updateFileProcessor' | 'singleUpload' | 'multipleUpload' | 'createSmsMessageProcessor' | 'createSmsProviderProcessor' | 'updateSmsProviderProcessor' | 'signup' | 'signin' | 'createUserProcessor' | 'updateUserProcessor' | 'resetPasswordProcessor' | 'createResetPasswordProcessor' | 'createTemplateProcessor' | 'updateTemplateProcessor' | 'createGalleryProcessor' | 'updateGalleryProcessor' | 'createResourceProcessor' | 'updateResourceProcessor' | 'createGameProcessor' | 'updateGameProcessor' | 'createGameResultProcessor' | 'updateGameResultProcessor' | 'createTournamentProcessor' | 'updateTournamentProcessor' | 'createTournamentGroupProcessor' | 'updateTournamentGroupProcessor' | 'createTourneyProcessor' | 'updateTourneyProcessor' | 'createChatRoomProcessor' | 'updateChatRoomProcessor' | 'inviteChatRoomProcessor' | 'joinChatRoom' | 'leaveChatRoom' | 'createChatMessageReadedProcessor' | 'createChatMessageProcessor' | 'updateChatMessageProcessor' | 'markAsReadedChatMessage' | 'createEthContractSourceProcessor' | 'updateEthContractSourceProcessor' | 'ethUnlockPersonalAccount' | 'createEthAccountProcessor' | 'updateEthAccountProcessor' | 'createEthTransactionProcessor' | 'ethRecoverPersonalSignature' | 'createCallRequestProcessor' | 'createProjectProcessor' | 'updateProjectProcessor' | 'createProjectMemberProcessor' | 'updateProjectMemberProcessor' | 'createTaskProcessor' | 'updateTaskProcessor' | 'createTaskReactionProcessor' | 'updateTaskReactionProcessor' | 'createTimerProcessor' | 'updateTimerProcessor' | 'createTeamProcessor' | 'updateTeamProcessor' | 'createTeamMemberProcessor' | 'updateTeamMemberProcessor' | 'createServiceProcessor' | 'updateServiceProcessor' | 'createPositionProcessor' | 'updatePositionProcessor' | 'createRouteProcessor' | 'updateRouteProcessor' | MutationKeySpecifier)[];
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
	createCodeChallengeCompletionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCodeChallengeCompletionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
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
	createCallRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	updateWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCallRequest?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGallery?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWorld?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteNotice?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGame?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGameResult?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTournament?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTournamentGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTourney?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProjectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTaskReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeamMember?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRoute?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCodeChallenge?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCodeChallengeBlock?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTechnologyLesson?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCareer?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTechnologyLessonUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUserTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTest?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTechnology?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteResource?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyNotices?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyRoutes?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyTests?: FieldPolicy<any> | FieldReadFunction<any>,
	runCommand?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	createFileProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateFileProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	singleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	multipleUpload?: FieldPolicy<any> | FieldReadFunction<any>,
	createSmsMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createSmsProviderProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSmsProviderProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	createUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUserProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createResetPasswordProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTemplateProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTemplateProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createGalleryProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGalleryProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createResourceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateResourceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createGameProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGameProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createGameResultProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGameResultProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTournamentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTournamentProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTournamentGroupProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTournamentGroupProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTourneyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTourneyProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatRoomProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateChatRoomProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	inviteChatRoomProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	joinChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	leaveChatRoom?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatMessageReadedProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createChatMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateChatMessageProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	markAsReadedChatMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createEthContractSourceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEthContractSourceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	ethUnlockPersonalAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	createEthAccountProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEthAccountProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createEthTransactionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	ethRecoverPersonalSignature?: FieldPolicy<any> | FieldReadFunction<any>,
	createCallRequestProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createProjectMemberProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectMemberProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTaskReactionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTaskReactionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTimerProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeamProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeamProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeamMemberProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTeamMemberProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createServiceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateServiceProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createPositionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePositionProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	createRouteProcessor?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRouteProcessor?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CodeChallengeCompletionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | CodeChallengeCompletionResponseKeySpecifier)[];
export type CodeChallengeCompletionResponseFieldPolicy = {
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
export type LetsadsSmsMessageStatusItemKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'sms_id' | 'Status' | LetsadsSmsMessageStatusItemKeySpecifier)[];
export type LetsadsSmsMessageStatusItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	sms_id?: FieldPolicy<any> | FieldReadFunction<any>,
	Status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SmsProviderResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | SmsProviderResponseKeySpecifier)[];
export type SmsProviderResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ChatRoomResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatRoomResponseKeySpecifier)[];
export type ChatRoomResponseFieldPolicy = {
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
export type ChatMessageResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ChatMessageResponseKeySpecifier)[];
export type ChatMessageResponseFieldPolicy = {
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
export type ProjectMemberResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ProjectMemberResponseKeySpecifier)[];
export type ProjectMemberResponseFieldPolicy = {
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
export type ServiceResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ServiceResponseKeySpecifier)[];
export type ServiceResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PositionResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | PositionResponseKeySpecifier)[];
export type PositionResponseFieldPolicy = {
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
export type ProjectPreviousValuesKeySpecifier = ('id' | 'name' | 'domain' | 'createdAt' | 'updatedAt' | 'description' | 'url' | 'sequence' | 'content' | 'contentText' | 'status' | 'public' | 'oldID' | 'type' | ProjectPreviousValuesKeySpecifier)[];
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
	oldID?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CodeChallengeCompletionPreviousValuesKeySpecifier = ('id' | 'createdAt' | 'updatedAt' | 'content' | 'success' | CodeChallengeCompletionPreviousValuesKeySpecifier)[];
export type CodeChallengeCompletionPreviousValuesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CodeChallengeCompletionSubscriptionPayloadKeySpecifier = ('mutation' | 'node' | 'updatedFields' | 'previousValues' | CodeChallengeCompletionSubscriptionPayloadKeySpecifier)[];
export type CodeChallengeCompletionSubscriptionPayloadFieldPolicy = {
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
export type MarketplaceAuthResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | MarketplaceAuthResponseKeySpecifier)[];
export type MarketplaceAuthResponseFieldPolicy = {
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
export type ServiceCategoryResponseKeySpecifier = ('success' | 'message' | 'errors' | 'data' | ServiceCategoryResponseKeySpecifier)[];
export type ServiceCategoryResponseFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	data?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Gallery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GalleryKeySpecifier | (() => undefined | GalleryKeySpecifier),
		fields?: GalleryFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupKeySpecifier | (() => undefined | UserGroupKeySpecifier),
		fields?: UserGroupFieldPolicy,
	},
	LogedIn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInKeySpecifier | (() => undefined | LogedInKeySpecifier),
		fields?: LogedInFieldPolicy,
	},
	Resource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceKeySpecifier | (() => undefined | ResourceKeySpecifier),
		fields?: ResourceFieldPolicy,
	},
	Vote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteKeySpecifier | (() => undefined | VoteKeySpecifier),
		fields?: VoteFieldPolicy,
	},
	ResourceTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagKeySpecifier | (() => undefined | ResourceTagKeySpecifier),
		fields?: ResourceTagFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	Service?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceKeySpecifier | (() => undefined | ServiceKeySpecifier),
		fields?: ServiceFieldPolicy,
	},
	ProjectMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberKeySpecifier | (() => undefined | ProjectMemberKeySpecifier),
		fields?: ProjectMemberFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	Template?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateKeySpecifier | (() => undefined | TemplateKeySpecifier),
		fields?: TemplateFieldPolicy,
	},
	ProjectTask?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskKeySpecifier | (() => undefined | ProjectTaskKeySpecifier),
		fields?: ProjectTaskFieldPolicy,
	},
	Task?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskKeySpecifier | (() => undefined | TaskKeySpecifier),
		fields?: TaskFieldPolicy,
	},
	TaskMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskMemberKeySpecifier | (() => undefined | TaskMemberKeySpecifier),
		fields?: TaskMemberFieldPolicy,
	},
	Timer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerKeySpecifier | (() => undefined | TimerKeySpecifier),
		fields?: TimerFieldPolicy,
	},
	TaskReaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionKeySpecifier | (() => undefined | TaskReactionKeySpecifier),
		fields?: TaskReactionFieldPolicy,
	},
	ChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomKeySpecifier | (() => undefined | ChatRoomKeySpecifier),
		fields?: ChatRoomFieldPolicy,
	},
	ChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageKeySpecifier | (() => undefined | ChatMessageKeySpecifier),
		fields?: ChatMessageFieldPolicy,
	},
	ChatMessageReaded?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedKeySpecifier | (() => undefined | ChatMessageReadedKeySpecifier),
		fields?: ChatMessageReadedFieldPolicy,
	},
	ChatRoomInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationKeySpecifier | (() => undefined | ChatRoomInvitationKeySpecifier),
		fields?: ChatRoomInvitationFieldPolicy,
	},
	Notice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeKeySpecifier | (() => undefined | NoticeKeySpecifier),
		fields?: NoticeFieldPolicy,
	},
	CallRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestKeySpecifier | (() => undefined | CallRequestKeySpecifier),
		fields?: CallRequestFieldPolicy,
	},
	CodeChallengeCompletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionKeySpecifier | (() => undefined | CodeChallengeCompletionKeySpecifier),
		fields?: CodeChallengeCompletionFieldPolicy,
	},
	CodeChallenge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeKeySpecifier | (() => undefined | CodeChallengeKeySpecifier),
		fields?: CodeChallengeFieldPolicy,
	},
	CodeChallengeBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockKeySpecifier | (() => undefined | CodeChallengeBlockKeySpecifier),
		fields?: CodeChallengeBlockFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberKeySpecifier | (() => undefined | TeamMemberKeySpecifier),
		fields?: TeamMemberFieldPolicy,
	},
	EthAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountKeySpecifier | (() => undefined | EthAccountKeySpecifier),
		fields?: EthAccountFieldPolicy,
	},
	EthTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionKeySpecifier | (() => undefined | EthTransactionKeySpecifier),
		fields?: EthTransactionFieldPolicy,
	},
	EthBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockKeySpecifier | (() => undefined | EthBlockKeySpecifier),
		fields?: EthBlockFieldPolicy,
	},
	EthContractSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceKeySpecifier | (() => undefined | EthContractSourceKeySpecifier),
		fields?: EthContractSourceFieldPolicy,
	},
	ServiceCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceCategoryKeySpecifier | (() => undefined | ServiceCategoryKeySpecifier),
		fields?: ServiceCategoryFieldPolicy,
	},
	NotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeKeySpecifier | (() => undefined | NotificationTypeKeySpecifier),
		fields?: NotificationTypeFieldPolicy,
	},
	World?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorldKeySpecifier | (() => undefined | WorldKeySpecifier),
		fields?: WorldFieldPolicy,
	},
	Block?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlockKeySpecifier | (() => undefined | BlockKeySpecifier),
		fields?: BlockFieldPolicy,
	},
	Player?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerKeySpecifier | (() => undefined | PlayerKeySpecifier),
		fields?: PlayerFieldPolicy,
	},
	Inventory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InventoryKeySpecifier | (() => undefined | InventoryKeySpecifier),
		fields?: InventoryFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	Settings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsKeySpecifier | (() => undefined | SettingsKeySpecifier),
		fields?: SettingsFieldPolicy,
	},
	Game?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameKeySpecifier | (() => undefined | GameKeySpecifier),
		fields?: GameFieldPolicy,
	},
	Tourney?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyKeySpecifier | (() => undefined | TourneyKeySpecifier),
		fields?: TourneyFieldPolicy,
	},
	Tournament?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentKeySpecifier | (() => undefined | TournamentKeySpecifier),
		fields?: TournamentFieldPolicy,
	},
	TournamentGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupKeySpecifier | (() => undefined | TournamentGroupKeySpecifier),
		fields?: TournamentGroupFieldPolicy,
	},
	TourneyPlayer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPlayerKeySpecifier | (() => undefined | TourneyPlayerKeySpecifier),
		fields?: TourneyPlayerFieldPolicy,
	},
	GameResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultKeySpecifier | (() => undefined | GameResultKeySpecifier),
		fields?: GameResultFieldPolicy,
	},
	Position?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionKeySpecifier | (() => undefined | PositionKeySpecifier),
		fields?: PositionFieldPolicy,
	},
	Route?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteKeySpecifier | (() => undefined | RouteKeySpecifier),
		fields?: RouteFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	TechnologyLesson?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonKeySpecifier | (() => undefined | TechnologyLessonKeySpecifier),
		fields?: TechnologyLessonFieldPolicy,
	},
	Technology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyKeySpecifier | (() => undefined | TechnologyKeySpecifier),
		fields?: TechnologyFieldPolicy,
	},
	UserTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyKeySpecifier | (() => undefined | UserTechnologyKeySpecifier),
		fields?: UserTechnologyFieldPolicy,
	},
	TechnologyLessonUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonUserKeySpecifier | (() => undefined | TechnologyLessonUserKeySpecifier),
		fields?: TechnologyLessonUserFieldPolicy,
	},
	Career?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerKeySpecifier | (() => undefined | CareerKeySpecifier),
		fields?: CareerFieldPolicy,
	},
	Test?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestKeySpecifier | (() => undefined | TestKeySpecifier),
		fields?: TestFieldPolicy,
	},
	GalleryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GalleryConnectionKeySpecifier | (() => undefined | GalleryConnectionKeySpecifier),
		fields?: GalleryConnectionFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	GalleryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GalleryEdgeKeySpecifier | (() => undefined | GalleryEdgeKeySpecifier),
		fields?: GalleryEdgeFieldPolicy,
	},
	AggregateGallery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateGalleryKeySpecifier | (() => undefined | AggregateGalleryKeySpecifier),
		fields?: AggregateGalleryFieldPolicy,
	},
	WorldConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorldConnectionKeySpecifier | (() => undefined | WorldConnectionKeySpecifier),
		fields?: WorldConnectionFieldPolicy,
	},
	WorldEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorldEdgeKeySpecifier | (() => undefined | WorldEdgeKeySpecifier),
		fields?: WorldEdgeFieldPolicy,
	},
	AggregateWorld?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateWorldKeySpecifier | (() => undefined | AggregateWorldKeySpecifier),
		fields?: AggregateWorldFieldPolicy,
	},
	NoticeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeConnectionKeySpecifier | (() => undefined | NoticeConnectionKeySpecifier),
		fields?: NoticeConnectionFieldPolicy,
	},
	NoticeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeEdgeKeySpecifier | (() => undefined | NoticeEdgeKeySpecifier),
		fields?: NoticeEdgeFieldPolicy,
	},
	AggregateNotice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNoticeKeySpecifier | (() => undefined | AggregateNoticeKeySpecifier),
		fields?: AggregateNoticeFieldPolicy,
	},
	NotificationTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeConnectionKeySpecifier | (() => undefined | NotificationTypeConnectionKeySpecifier),
		fields?: NotificationTypeConnectionFieldPolicy,
	},
	NotificationTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeEdgeKeySpecifier | (() => undefined | NotificationTypeEdgeKeySpecifier),
		fields?: NotificationTypeEdgeFieldPolicy,
	},
	AggregateNotificationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateNotificationTypeKeySpecifier | (() => undefined | AggregateNotificationTypeKeySpecifier),
		fields?: AggregateNotificationTypeFieldPolicy,
	},
	ResourceTagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagConnectionKeySpecifier | (() => undefined | ResourceTagConnectionKeySpecifier),
		fields?: ResourceTagConnectionFieldPolicy,
	},
	ResourceTagEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagEdgeKeySpecifier | (() => undefined | ResourceTagEdgeKeySpecifier),
		fields?: ResourceTagEdgeFieldPolicy,
	},
	AggregateResourceTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateResourceTagKeySpecifier | (() => undefined | AggregateResourceTagKeySpecifier),
		fields?: AggregateResourceTagFieldPolicy,
	},
	TagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagConnectionKeySpecifier | (() => undefined | TagConnectionKeySpecifier),
		fields?: TagConnectionFieldPolicy,
	},
	TagEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagEdgeKeySpecifier | (() => undefined | TagEdgeKeySpecifier),
		fields?: TagEdgeFieldPolicy,
	},
	AggregateTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTagKeySpecifier | (() => undefined | AggregateTagKeySpecifier),
		fields?: AggregateTagFieldPolicy,
	},
	VoteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteConnectionKeySpecifier | (() => undefined | VoteConnectionKeySpecifier),
		fields?: VoteConnectionFieldPolicy,
	},
	VoteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteEdgeKeySpecifier | (() => undefined | VoteEdgeKeySpecifier),
		fields?: VoteEdgeFieldPolicy,
	},
	AggregateVote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateVoteKeySpecifier | (() => undefined | AggregateVoteKeySpecifier),
		fields?: AggregateVoteFieldPolicy,
	},
	ChatRoomConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomConnectionKeySpecifier | (() => undefined | ChatRoomConnectionKeySpecifier),
		fields?: ChatRoomConnectionFieldPolicy,
	},
	ChatRoomEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomEdgeKeySpecifier | (() => undefined | ChatRoomEdgeKeySpecifier),
		fields?: ChatRoomEdgeFieldPolicy,
	},
	AggregateChatRoom?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatRoomKeySpecifier | (() => undefined | AggregateChatRoomKeySpecifier),
		fields?: AggregateChatRoomFieldPolicy,
	},
	GameConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameConnectionKeySpecifier | (() => undefined | GameConnectionKeySpecifier),
		fields?: GameConnectionFieldPolicy,
	},
	GameEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameEdgeKeySpecifier | (() => undefined | GameEdgeKeySpecifier),
		fields?: GameEdgeFieldPolicy,
	},
	AggregateGame?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateGameKeySpecifier | (() => undefined | AggregateGameKeySpecifier),
		fields?: AggregateGameFieldPolicy,
	},
	GameResultConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultConnectionKeySpecifier | (() => undefined | GameResultConnectionKeySpecifier),
		fields?: GameResultConnectionFieldPolicy,
	},
	GameResultEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultEdgeKeySpecifier | (() => undefined | GameResultEdgeKeySpecifier),
		fields?: GameResultEdgeFieldPolicy,
	},
	AggregateGameResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateGameResultKeySpecifier | (() => undefined | AggregateGameResultKeySpecifier),
		fields?: AggregateGameResultFieldPolicy,
	},
	TournamentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentConnectionKeySpecifier | (() => undefined | TournamentConnectionKeySpecifier),
		fields?: TournamentConnectionFieldPolicy,
	},
	TournamentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentEdgeKeySpecifier | (() => undefined | TournamentEdgeKeySpecifier),
		fields?: TournamentEdgeFieldPolicy,
	},
	AggregateTournament?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTournamentKeySpecifier | (() => undefined | AggregateTournamentKeySpecifier),
		fields?: AggregateTournamentFieldPolicy,
	},
	TournamentGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupConnectionKeySpecifier | (() => undefined | TournamentGroupConnectionKeySpecifier),
		fields?: TournamentGroupConnectionFieldPolicy,
	},
	TournamentGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupEdgeKeySpecifier | (() => undefined | TournamentGroupEdgeKeySpecifier),
		fields?: TournamentGroupEdgeFieldPolicy,
	},
	AggregateTournamentGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTournamentGroupKeySpecifier | (() => undefined | AggregateTournamentGroupKeySpecifier),
		fields?: AggregateTournamentGroupFieldPolicy,
	},
	TourneyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyConnectionKeySpecifier | (() => undefined | TourneyConnectionKeySpecifier),
		fields?: TourneyConnectionFieldPolicy,
	},
	TourneyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyEdgeKeySpecifier | (() => undefined | TourneyEdgeKeySpecifier),
		fields?: TourneyEdgeFieldPolicy,
	},
	AggregateTourney?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTourneyKeySpecifier | (() => undefined | AggregateTourneyKeySpecifier),
		fields?: AggregateTourneyFieldPolicy,
	},
	EthAccountConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountConnectionKeySpecifier | (() => undefined | EthAccountConnectionKeySpecifier),
		fields?: EthAccountConnectionFieldPolicy,
	},
	EthAccountEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountEdgeKeySpecifier | (() => undefined | EthAccountEdgeKeySpecifier),
		fields?: EthAccountEdgeFieldPolicy,
	},
	AggregateEthAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthAccountKeySpecifier | (() => undefined | AggregateEthAccountKeySpecifier),
		fields?: AggregateEthAccountFieldPolicy,
	},
	EthContractSourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceConnectionKeySpecifier | (() => undefined | EthContractSourceConnectionKeySpecifier),
		fields?: EthContractSourceConnectionFieldPolicy,
	},
	EthContractSourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceEdgeKeySpecifier | (() => undefined | EthContractSourceEdgeKeySpecifier),
		fields?: EthContractSourceEdgeFieldPolicy,
	},
	AggregateEthContractSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthContractSourceKeySpecifier | (() => undefined | AggregateEthContractSourceKeySpecifier),
		fields?: AggregateEthContractSourceFieldPolicy,
	},
	EthTransactionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionConnectionKeySpecifier | (() => undefined | EthTransactionConnectionKeySpecifier),
		fields?: EthTransactionConnectionFieldPolicy,
	},
	EthTransactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionEdgeKeySpecifier | (() => undefined | EthTransactionEdgeKeySpecifier),
		fields?: EthTransactionEdgeFieldPolicy,
	},
	AggregateEthTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthTransactionKeySpecifier | (() => undefined | AggregateEthTransactionKeySpecifier),
		fields?: AggregateEthTransactionFieldPolicy,
	},
	CallRequestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestConnectionKeySpecifier | (() => undefined | CallRequestConnectionKeySpecifier),
		fields?: CallRequestConnectionFieldPolicy,
	},
	CallRequestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestEdgeKeySpecifier | (() => undefined | CallRequestEdgeKeySpecifier),
		fields?: CallRequestEdgeFieldPolicy,
	},
	AggregateCallRequest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCallRequestKeySpecifier | (() => undefined | AggregateCallRequestKeySpecifier),
		fields?: AggregateCallRequestFieldPolicy,
	},
	PositionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionConnectionKeySpecifier | (() => undefined | PositionConnectionKeySpecifier),
		fields?: PositionConnectionFieldPolicy,
	},
	PositionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionEdgeKeySpecifier | (() => undefined | PositionEdgeKeySpecifier),
		fields?: PositionEdgeFieldPolicy,
	},
	AggregatePosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregatePositionKeySpecifier | (() => undefined | AggregatePositionKeySpecifier),
		fields?: AggregatePositionFieldPolicy,
	},
	ProjectMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberConnectionKeySpecifier | (() => undefined | ProjectMemberConnectionKeySpecifier),
		fields?: ProjectMemberConnectionFieldPolicy,
	},
	ProjectMemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberEdgeKeySpecifier | (() => undefined | ProjectMemberEdgeKeySpecifier),
		fields?: ProjectMemberEdgeFieldPolicy,
	},
	AggregateProjectMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateProjectMemberKeySpecifier | (() => undefined | AggregateProjectMemberKeySpecifier),
		fields?: AggregateProjectMemberFieldPolicy,
	},
	ServiceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceConnectionKeySpecifier | (() => undefined | ServiceConnectionKeySpecifier),
		fields?: ServiceConnectionFieldPolicy,
	},
	ServiceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceEdgeKeySpecifier | (() => undefined | ServiceEdgeKeySpecifier),
		fields?: ServiceEdgeFieldPolicy,
	},
	AggregateService?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateServiceKeySpecifier | (() => undefined | AggregateServiceKeySpecifier),
		fields?: AggregateServiceFieldPolicy,
	},
	TaskConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskConnectionKeySpecifier | (() => undefined | TaskConnectionKeySpecifier),
		fields?: TaskConnectionFieldPolicy,
	},
	TaskEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskEdgeKeySpecifier | (() => undefined | TaskEdgeKeySpecifier),
		fields?: TaskEdgeFieldPolicy,
	},
	AggregateTask?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTaskKeySpecifier | (() => undefined | AggregateTaskKeySpecifier),
		fields?: AggregateTaskFieldPolicy,
	},
	TaskReactionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionConnectionKeySpecifier | (() => undefined | TaskReactionConnectionKeySpecifier),
		fields?: TaskReactionConnectionFieldPolicy,
	},
	TaskReactionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionEdgeKeySpecifier | (() => undefined | TaskReactionEdgeKeySpecifier),
		fields?: TaskReactionEdgeFieldPolicy,
	},
	AggregateTaskReaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTaskReactionKeySpecifier | (() => undefined | AggregateTaskReactionKeySpecifier),
		fields?: AggregateTaskReactionFieldPolicy,
	},
	TeamMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberConnectionKeySpecifier | (() => undefined | TeamMemberConnectionKeySpecifier),
		fields?: TeamMemberConnectionFieldPolicy,
	},
	TeamMemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberEdgeKeySpecifier | (() => undefined | TeamMemberEdgeKeySpecifier),
		fields?: TeamMemberEdgeFieldPolicy,
	},
	AggregateTeamMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTeamMemberKeySpecifier | (() => undefined | AggregateTeamMemberKeySpecifier),
		fields?: AggregateTeamMemberFieldPolicy,
	},
	TimerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerConnectionKeySpecifier | (() => undefined | TimerConnectionKeySpecifier),
		fields?: TimerConnectionFieldPolicy,
	},
	TimerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerEdgeKeySpecifier | (() => undefined | TimerEdgeKeySpecifier),
		fields?: TimerEdgeFieldPolicy,
	},
	AggregateTimer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTimerKeySpecifier | (() => undefined | AggregateTimerKeySpecifier),
		fields?: AggregateTimerFieldPolicy,
	},
	RouteConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteConnectionKeySpecifier | (() => undefined | RouteConnectionKeySpecifier),
		fields?: RouteConnectionFieldPolicy,
	},
	RouteEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteEdgeKeySpecifier | (() => undefined | RouteEdgeKeySpecifier),
		fields?: RouteEdgeFieldPolicy,
	},
	AggregateRoute?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateRouteKeySpecifier | (() => undefined | AggregateRouteKeySpecifier),
		fields?: AggregateRouteFieldPolicy,
	},
	CodeChallengeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeConnectionKeySpecifier | (() => undefined | CodeChallengeConnectionKeySpecifier),
		fields?: CodeChallengeConnectionFieldPolicy,
	},
	CodeChallengeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeEdgeKeySpecifier | (() => undefined | CodeChallengeEdgeKeySpecifier),
		fields?: CodeChallengeEdgeFieldPolicy,
	},
	AggregateCodeChallenge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCodeChallengeKeySpecifier | (() => undefined | AggregateCodeChallengeKeySpecifier),
		fields?: AggregateCodeChallengeFieldPolicy,
	},
	CodeChallengeBlockConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockConnectionKeySpecifier | (() => undefined | CodeChallengeBlockConnectionKeySpecifier),
		fields?: CodeChallengeBlockConnectionFieldPolicy,
	},
	CodeChallengeBlockEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockEdgeKeySpecifier | (() => undefined | CodeChallengeBlockEdgeKeySpecifier),
		fields?: CodeChallengeBlockEdgeFieldPolicy,
	},
	AggregateCodeChallengeBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCodeChallengeBlockKeySpecifier | (() => undefined | AggregateCodeChallengeBlockKeySpecifier),
		fields?: AggregateCodeChallengeBlockFieldPolicy,
	},
	CodeChallengeCompletionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionConnectionKeySpecifier | (() => undefined | CodeChallengeCompletionConnectionKeySpecifier),
		fields?: CodeChallengeCompletionConnectionFieldPolicy,
	},
	CodeChallengeCompletionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionEdgeKeySpecifier | (() => undefined | CodeChallengeCompletionEdgeKeySpecifier),
		fields?: CodeChallengeCompletionEdgeFieldPolicy,
	},
	AggregateCodeChallengeCompletion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCodeChallengeCompletionKeySpecifier | (() => undefined | AggregateCodeChallengeCompletionKeySpecifier),
		fields?: AggregateCodeChallengeCompletionFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	AggregateComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCommentKeySpecifier | (() => undefined | AggregateCommentKeySpecifier),
		fields?: AggregateCommentFieldPolicy,
	},
	TechnologyLessonConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonConnectionKeySpecifier | (() => undefined | TechnologyLessonConnectionKeySpecifier),
		fields?: TechnologyLessonConnectionFieldPolicy,
	},
	TechnologyLessonEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonEdgeKeySpecifier | (() => undefined | TechnologyLessonEdgeKeySpecifier),
		fields?: TechnologyLessonEdgeFieldPolicy,
	},
	AggregateTechnologyLesson?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTechnologyLessonKeySpecifier | (() => undefined | AggregateTechnologyLessonKeySpecifier),
		fields?: AggregateTechnologyLessonFieldPolicy,
	},
	CareerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerConnectionKeySpecifier | (() => undefined | CareerConnectionKeySpecifier),
		fields?: CareerConnectionFieldPolicy,
	},
	CareerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerEdgeKeySpecifier | (() => undefined | CareerEdgeKeySpecifier),
		fields?: CareerEdgeFieldPolicy,
	},
	AggregateCareer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateCareerKeySpecifier | (() => undefined | AggregateCareerKeySpecifier),
		fields?: AggregateCareerFieldPolicy,
	},
	TechnologyLessonUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonUserConnectionKeySpecifier | (() => undefined | TechnologyLessonUserConnectionKeySpecifier),
		fields?: TechnologyLessonUserConnectionFieldPolicy,
	},
	TechnologyLessonUserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonUserEdgeKeySpecifier | (() => undefined | TechnologyLessonUserEdgeKeySpecifier),
		fields?: TechnologyLessonUserEdgeFieldPolicy,
	},
	AggregateTechnologyLessonUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTechnologyLessonUserKeySpecifier | (() => undefined | AggregateTechnologyLessonUserKeySpecifier),
		fields?: AggregateTechnologyLessonUserFieldPolicy,
	},
	UserTechnologyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyConnectionKeySpecifier | (() => undefined | UserTechnologyConnectionKeySpecifier),
		fields?: UserTechnologyConnectionFieldPolicy,
	},
	UserTechnologyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyEdgeKeySpecifier | (() => undefined | UserTechnologyEdgeKeySpecifier),
		fields?: UserTechnologyEdgeFieldPolicy,
	},
	AggregateUserTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserTechnologyKeySpecifier | (() => undefined | AggregateUserTechnologyKeySpecifier),
		fields?: AggregateUserTechnologyFieldPolicy,
	},
	TestConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestConnectionKeySpecifier | (() => undefined | TestConnectionKeySpecifier),
		fields?: TestConnectionFieldPolicy,
	},
	TestEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestEdgeKeySpecifier | (() => undefined | TestEdgeKeySpecifier),
		fields?: TestEdgeFieldPolicy,
	},
	AggregateTest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTestKeySpecifier | (() => undefined | AggregateTestKeySpecifier),
		fields?: AggregateTestFieldPolicy,
	},
	TechnologyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyConnectionKeySpecifier | (() => undefined | TechnologyConnectionKeySpecifier),
		fields?: TechnologyConnectionFieldPolicy,
	},
	TechnologyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyEdgeKeySpecifier | (() => undefined | TechnologyEdgeKeySpecifier),
		fields?: TechnologyEdgeFieldPolicy,
	},
	AggregateTechnology?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTechnologyKeySpecifier | (() => undefined | AggregateTechnologyKeySpecifier),
		fields?: AggregateTechnologyFieldPolicy,
	},
	EthBlockConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockConnectionKeySpecifier | (() => undefined | EthBlockConnectionKeySpecifier),
		fields?: EthBlockConnectionFieldPolicy,
	},
	EthBlockEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockEdgeKeySpecifier | (() => undefined | EthBlockEdgeKeySpecifier),
		fields?: EthBlockEdgeFieldPolicy,
	},
	AggregateEthBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateEthBlockKeySpecifier | (() => undefined | AggregateEthBlockKeySpecifier),
		fields?: AggregateEthBlockFieldPolicy,
	},
	TeamConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamConnectionKeySpecifier | (() => undefined | TeamConnectionKeySpecifier),
		fields?: TeamConnectionFieldPolicy,
	},
	TeamEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamEdgeKeySpecifier | (() => undefined | TeamEdgeKeySpecifier),
		fields?: TeamEdgeFieldPolicy,
	},
	AggregateTeam?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTeamKeySpecifier | (() => undefined | AggregateTeamKeySpecifier),
		fields?: AggregateTeamFieldPolicy,
	},
	ProjectConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectConnectionKeySpecifier | (() => undefined | ProjectConnectionKeySpecifier),
		fields?: ProjectConnectionFieldPolicy,
	},
	ProjectEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectEdgeKeySpecifier | (() => undefined | ProjectEdgeKeySpecifier),
		fields?: ProjectEdgeFieldPolicy,
	},
	AggregateProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateProjectKeySpecifier | (() => undefined | AggregateProjectKeySpecifier),
		fields?: AggregateProjectFieldPolicy,
	},
	TemplateConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateConnectionKeySpecifier | (() => undefined | TemplateConnectionKeySpecifier),
		fields?: TemplateConnectionFieldPolicy,
	},
	TemplateEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateEdgeKeySpecifier | (() => undefined | TemplateEdgeKeySpecifier),
		fields?: TemplateEdgeFieldPolicy,
	},
	AggregateTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTemplateKeySpecifier | (() => undefined | AggregateTemplateKeySpecifier),
		fields?: AggregateTemplateFieldPolicy,
	},
	ResourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceConnectionKeySpecifier | (() => undefined | ResourceConnectionKeySpecifier),
		fields?: ResourceConnectionFieldPolicy,
	},
	ResourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceEdgeKeySpecifier | (() => undefined | ResourceEdgeKeySpecifier),
		fields?: ResourceEdgeFieldPolicy,
	},
	AggregateResource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateResourceKeySpecifier | (() => undefined | AggregateResourceKeySpecifier),
		fields?: AggregateResourceFieldPolicy,
	},
	ChatMessageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageConnectionKeySpecifier | (() => undefined | ChatMessageConnectionKeySpecifier),
		fields?: ChatMessageConnectionFieldPolicy,
	},
	ChatMessageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageEdgeKeySpecifier | (() => undefined | ChatMessageEdgeKeySpecifier),
		fields?: ChatMessageEdgeFieldPolicy,
	},
	AggregateChatMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatMessageKeySpecifier | (() => undefined | AggregateChatMessageKeySpecifier),
		fields?: AggregateChatMessageFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	AggregateUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserKeySpecifier | (() => undefined | AggregateUserKeySpecifier),
		fields?: AggregateUserFieldPolicy,
	},
	ethNet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ethNetKeySpecifier | (() => undefined | ethNetKeySpecifier),
		fields?: ethNetFieldPolicy,
	},
	EthPersonalAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthPersonalAccountKeySpecifier | (() => undefined | EthPersonalAccountKeySpecifier),
		fields?: EthPersonalAccountFieldPolicy,
	},
	ethSyncState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ethSyncStateKeySpecifier | (() => undefined | ethSyncStateKeySpecifier),
		fields?: ethSyncStateFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	ResourceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceResponseKeySpecifier | (() => undefined | ResourceResponseKeySpecifier),
		fields?: ResourceResponseFieldPolicy,
	},
	Error?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorKeySpecifier | (() => undefined | ErrorKeySpecifier),
		fields?: ErrorFieldPolicy,
	},
	TestResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestResponseKeySpecifier | (() => undefined | TestResponseKeySpecifier),
		fields?: TestResponseFieldPolicy,
	},
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	EthAccountResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountResponseKeySpecifier | (() => undefined | EthAccountResponseKeySpecifier),
		fields?: EthAccountResponseFieldPolicy,
	},
	CodeChallengeCompletionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionResponseKeySpecifier | (() => undefined | CodeChallengeCompletionResponseKeySpecifier),
		fields?: CodeChallengeCompletionResponseFieldPolicy,
	},
	CareerResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerResponseKeySpecifier | (() => undefined | CareerResponseKeySpecifier),
		fields?: CareerResponseFieldPolicy,
	},
	UserTechnologyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyResponseKeySpecifier | (() => undefined | UserTechnologyResponseKeySpecifier),
		fields?: UserTechnologyResponseFieldPolicy,
	},
	TechnologyLessonResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonResponseKeySpecifier | (() => undefined | TechnologyLessonResponseKeySpecifier),
		fields?: TechnologyLessonResponseFieldPolicy,
	},
	TechnologyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyResponseKeySpecifier | (() => undefined | TechnologyResponseKeySpecifier),
		fields?: TechnologyResponseFieldPolicy,
	},
	CommentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentResponseKeySpecifier | (() => undefined | CommentResponseKeySpecifier),
		fields?: CommentResponseFieldPolicy,
	},
	TechnologyLessonUserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonUserResponseKeySpecifier | (() => undefined | TechnologyLessonUserResponseKeySpecifier),
		fields?: TechnologyLessonUserResponseFieldPolicy,
	},
	BatchPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchPayloadKeySpecifier | (() => undefined | BatchPayloadKeySpecifier),
		fields?: BatchPayloadFieldPolicy,
	},
	McJsAuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | McJsAuthPayloadKeySpecifier | (() => undefined | McJsAuthPayloadKeySpecifier),
		fields?: McJsAuthPayloadFieldPolicy,
	},
	FileResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileResponseKeySpecifier | (() => undefined | FileResponseKeySpecifier),
		fields?: FileResponseFieldPolicy,
	},
	SmsMessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageResponseKeySpecifier | (() => undefined | SmsMessageResponseKeySpecifier),
		fields?: SmsMessageResponseFieldPolicy,
	},
	SmsMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageKeySpecifier | (() => undefined | SmsMessageKeySpecifier),
		fields?: SmsMessageFieldPolicy,
	},
	SmsProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderKeySpecifier | (() => undefined | SmsProviderKeySpecifier),
		fields?: SmsProviderFieldPolicy,
	},
	LetsadsSmsMessageStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusKeySpecifier | (() => undefined | LetsadsSmsMessageStatusKeySpecifier),
		fields?: LetsadsSmsMessageStatusFieldPolicy,
	},
	LetsadsSmsMessageStatusItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemFieldPolicy,
	},
	SmsProviderResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderResponseKeySpecifier | (() => undefined | SmsProviderResponseKeySpecifier),
		fields?: SmsProviderResponseFieldPolicy,
	},
	UserResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserResponseKeySpecifier | (() => undefined | UserResponseKeySpecifier),
		fields?: UserResponseFieldPolicy,
	},
	ResetPasswordResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordResponseKeySpecifier | (() => undefined | ResetPasswordResponseKeySpecifier),
		fields?: ResetPasswordResponseFieldPolicy,
	},
	ResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordKeySpecifier | (() => undefined | ResetPasswordKeySpecifier),
		fields?: ResetPasswordFieldPolicy,
	},
	TemplateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateResponseKeySpecifier | (() => undefined | TemplateResponseKeySpecifier),
		fields?: TemplateResponseFieldPolicy,
	},
	GalleryResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GalleryResponseKeySpecifier | (() => undefined | GalleryResponseKeySpecifier),
		fields?: GalleryResponseFieldPolicy,
	},
	GameResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResponseKeySpecifier | (() => undefined | GameResponseKeySpecifier),
		fields?: GameResponseFieldPolicy,
	},
	GameResultResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultResponseKeySpecifier | (() => undefined | GameResultResponseKeySpecifier),
		fields?: GameResultResponseFieldPolicy,
	},
	TournamentResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentResponseKeySpecifier | (() => undefined | TournamentResponseKeySpecifier),
		fields?: TournamentResponseFieldPolicy,
	},
	TournamentGroupResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupResponseKeySpecifier | (() => undefined | TournamentGroupResponseKeySpecifier),
		fields?: TournamentGroupResponseFieldPolicy,
	},
	TourneyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyResponseKeySpecifier | (() => undefined | TourneyResponseKeySpecifier),
		fields?: TourneyResponseFieldPolicy,
	},
	ChatRoomResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomResponseKeySpecifier | (() => undefined | ChatRoomResponseKeySpecifier),
		fields?: ChatRoomResponseFieldPolicy,
	},
	ChatMessageReadedResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedResponseKeySpecifier | (() => undefined | ChatMessageReadedResponseKeySpecifier),
		fields?: ChatMessageReadedResponseFieldPolicy,
	},
	ChatMessageResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageResponseKeySpecifier | (() => undefined | ChatMessageResponseKeySpecifier),
		fields?: ChatMessageResponseFieldPolicy,
	},
	EthContractSourceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceResponseKeySpecifier | (() => undefined | EthContractSourceResponseKeySpecifier),
		fields?: EthContractSourceResponseFieldPolicy,
	},
	EthTransactionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionResponseKeySpecifier | (() => undefined | EthTransactionResponseKeySpecifier),
		fields?: EthTransactionResponseFieldPolicy,
	},
	CallRequestResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestResponseKeySpecifier | (() => undefined | CallRequestResponseKeySpecifier),
		fields?: CallRequestResponseFieldPolicy,
	},
	ProjectResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectResponseKeySpecifier | (() => undefined | ProjectResponseKeySpecifier),
		fields?: ProjectResponseFieldPolicy,
	},
	ProjectMemberResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberResponseKeySpecifier | (() => undefined | ProjectMemberResponseKeySpecifier),
		fields?: ProjectMemberResponseFieldPolicy,
	},
	TaskResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskResponseKeySpecifier | (() => undefined | TaskResponseKeySpecifier),
		fields?: TaskResponseFieldPolicy,
	},
	TaskReactionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionResponseKeySpecifier | (() => undefined | TaskReactionResponseKeySpecifier),
		fields?: TaskReactionResponseFieldPolicy,
	},
	TimerResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerResponseKeySpecifier | (() => undefined | TimerResponseKeySpecifier),
		fields?: TimerResponseFieldPolicy,
	},
	TeamResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamResponseKeySpecifier | (() => undefined | TeamResponseKeySpecifier),
		fields?: TeamResponseFieldPolicy,
	},
	TeamMemberResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberResponseKeySpecifier | (() => undefined | TeamMemberResponseKeySpecifier),
		fields?: TeamMemberResponseFieldPolicy,
	},
	ServiceResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceResponseKeySpecifier | (() => undefined | ServiceResponseKeySpecifier),
		fields?: ServiceResponseFieldPolicy,
	},
	PositionResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionResponseKeySpecifier | (() => undefined | PositionResponseKeySpecifier),
		fields?: PositionResponseFieldPolicy,
	},
	RouteResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteResponseKeySpecifier | (() => undefined | RouteResponseKeySpecifier),
		fields?: RouteResponseFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	GallerySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GallerySubscriptionPayloadKeySpecifier | (() => undefined | GallerySubscriptionPayloadKeySpecifier),
		fields?: GallerySubscriptionPayloadFieldPolicy,
	},
	GalleryPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GalleryPreviousValuesKeySpecifier | (() => undefined | GalleryPreviousValuesKeySpecifier),
		fields?: GalleryPreviousValuesFieldPolicy,
	},
	PlayerSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerSubscriptionPayloadKeySpecifier | (() => undefined | PlayerSubscriptionPayloadKeySpecifier),
		fields?: PlayerSubscriptionPayloadFieldPolicy,
	},
	PlayerPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerPreviousValuesKeySpecifier | (() => undefined | PlayerPreviousValuesKeySpecifier),
		fields?: PlayerPreviousValuesFieldPolicy,
	},
	WorldSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorldSubscriptionPayloadKeySpecifier | (() => undefined | WorldSubscriptionPayloadKeySpecifier),
		fields?: WorldSubscriptionPayloadFieldPolicy,
	},
	WorldPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorldPreviousValuesKeySpecifier | (() => undefined | WorldPreviousValuesKeySpecifier),
		fields?: WorldPreviousValuesFieldPolicy,
	},
	MessageSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageSubscriptionPayloadKeySpecifier | (() => undefined | MessageSubscriptionPayloadKeySpecifier),
		fields?: MessageSubscriptionPayloadFieldPolicy,
	},
	MessagePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessagePreviousValuesKeySpecifier | (() => undefined | MessagePreviousValuesKeySpecifier),
		fields?: MessagePreviousValuesFieldPolicy,
	},
	NoticeSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticeSubscriptionPayloadKeySpecifier | (() => undefined | NoticeSubscriptionPayloadKeySpecifier),
		fields?: NoticeSubscriptionPayloadFieldPolicy,
	},
	NoticePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NoticePreviousValuesKeySpecifier | (() => undefined | NoticePreviousValuesKeySpecifier),
		fields?: NoticePreviousValuesFieldPolicy,
	},
	ChatMessageReadedSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedSubscriptionPayloadKeySpecifier | (() => undefined | ChatMessageReadedSubscriptionPayloadKeySpecifier),
		fields?: ChatMessageReadedSubscriptionPayloadFieldPolicy,
	},
	ChatMessageReadedPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedPreviousValuesKeySpecifier | (() => undefined | ChatMessageReadedPreviousValuesKeySpecifier),
		fields?: ChatMessageReadedPreviousValuesFieldPolicy,
	},
	ChatRoomSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomSubscriptionPayloadKeySpecifier | (() => undefined | ChatRoomSubscriptionPayloadKeySpecifier),
		fields?: ChatRoomSubscriptionPayloadFieldPolicy,
	},
	ChatRoomPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomPreviousValuesKeySpecifier | (() => undefined | ChatRoomPreviousValuesKeySpecifier),
		fields?: ChatRoomPreviousValuesFieldPolicy,
	},
	GameSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameSubscriptionPayloadKeySpecifier | (() => undefined | GameSubscriptionPayloadKeySpecifier),
		fields?: GameSubscriptionPayloadFieldPolicy,
	},
	GamePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GamePreviousValuesKeySpecifier | (() => undefined | GamePreviousValuesKeySpecifier),
		fields?: GamePreviousValuesFieldPolicy,
	},
	GameResultSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultSubscriptionPayloadKeySpecifier | (() => undefined | GameResultSubscriptionPayloadKeySpecifier),
		fields?: GameResultSubscriptionPayloadFieldPolicy,
	},
	GameResultPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameResultPreviousValuesKeySpecifier | (() => undefined | GameResultPreviousValuesKeySpecifier),
		fields?: GameResultPreviousValuesFieldPolicy,
	},
	TournamentSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentSubscriptionPayloadKeySpecifier | (() => undefined | TournamentSubscriptionPayloadKeySpecifier),
		fields?: TournamentSubscriptionPayloadFieldPolicy,
	},
	TournamentPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentPreviousValuesKeySpecifier | (() => undefined | TournamentPreviousValuesKeySpecifier),
		fields?: TournamentPreviousValuesFieldPolicy,
	},
	TournamentGroupSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupSubscriptionPayloadKeySpecifier | (() => undefined | TournamentGroupSubscriptionPayloadKeySpecifier),
		fields?: TournamentGroupSubscriptionPayloadFieldPolicy,
	},
	TournamentGroupPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TournamentGroupPreviousValuesKeySpecifier | (() => undefined | TournamentGroupPreviousValuesKeySpecifier),
		fields?: TournamentGroupPreviousValuesFieldPolicy,
	},
	TourneySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneySubscriptionPayloadKeySpecifier | (() => undefined | TourneySubscriptionPayloadKeySpecifier),
		fields?: TourneySubscriptionPayloadFieldPolicy,
	},
	TourneyPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPreviousValuesKeySpecifier | (() => undefined | TourneyPreviousValuesKeySpecifier),
		fields?: TourneyPreviousValuesFieldPolicy,
	},
	EthTransactionSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionSubscriptionPayloadKeySpecifier | (() => undefined | EthTransactionSubscriptionPayloadKeySpecifier),
		fields?: EthTransactionSubscriptionPayloadFieldPolicy,
	},
	CallRequestSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestSubscriptionPayloadKeySpecifier | (() => undefined | CallRequestSubscriptionPayloadKeySpecifier),
		fields?: CallRequestSubscriptionPayloadFieldPolicy,
	},
	CallRequestPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CallRequestPreviousValuesKeySpecifier | (() => undefined | CallRequestPreviousValuesKeySpecifier),
		fields?: CallRequestPreviousValuesFieldPolicy,
	},
	PositionSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionSubscriptionPayloadKeySpecifier | (() => undefined | PositionSubscriptionPayloadKeySpecifier),
		fields?: PositionSubscriptionPayloadFieldPolicy,
	},
	PositionPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PositionPreviousValuesKeySpecifier | (() => undefined | PositionPreviousValuesKeySpecifier),
		fields?: PositionPreviousValuesFieldPolicy,
	},
	ProjectMemberSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberSubscriptionPayloadKeySpecifier | (() => undefined | ProjectMemberSubscriptionPayloadKeySpecifier),
		fields?: ProjectMemberSubscriptionPayloadFieldPolicy,
	},
	ProjectMemberPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberPreviousValuesKeySpecifier | (() => undefined | ProjectMemberPreviousValuesKeySpecifier),
		fields?: ProjectMemberPreviousValuesFieldPolicy,
	},
	ServiceSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceSubscriptionPayloadKeySpecifier | (() => undefined | ServiceSubscriptionPayloadKeySpecifier),
		fields?: ServiceSubscriptionPayloadFieldPolicy,
	},
	ServicePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServicePreviousValuesKeySpecifier | (() => undefined | ServicePreviousValuesKeySpecifier),
		fields?: ServicePreviousValuesFieldPolicy,
	},
	TaskSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskSubscriptionPayloadKeySpecifier | (() => undefined | TaskSubscriptionPayloadKeySpecifier),
		fields?: TaskSubscriptionPayloadFieldPolicy,
	},
	TaskPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskPreviousValuesKeySpecifier | (() => undefined | TaskPreviousValuesKeySpecifier),
		fields?: TaskPreviousValuesFieldPolicy,
	},
	TaskReactionSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionSubscriptionPayloadKeySpecifier | (() => undefined | TaskReactionSubscriptionPayloadKeySpecifier),
		fields?: TaskReactionSubscriptionPayloadFieldPolicy,
	},
	TaskReactionPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskReactionPreviousValuesKeySpecifier | (() => undefined | TaskReactionPreviousValuesKeySpecifier),
		fields?: TaskReactionPreviousValuesFieldPolicy,
	},
	TeamMemberSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberSubscriptionPayloadKeySpecifier | (() => undefined | TeamMemberSubscriptionPayloadKeySpecifier),
		fields?: TeamMemberSubscriptionPayloadFieldPolicy,
	},
	TeamMemberPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamMemberPreviousValuesKeySpecifier | (() => undefined | TeamMemberPreviousValuesKeySpecifier),
		fields?: TeamMemberPreviousValuesFieldPolicy,
	},
	TimerSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerSubscriptionPayloadKeySpecifier | (() => undefined | TimerSubscriptionPayloadKeySpecifier),
		fields?: TimerSubscriptionPayloadFieldPolicy,
	},
	TimerPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerPreviousValuesKeySpecifier | (() => undefined | TimerPreviousValuesKeySpecifier),
		fields?: TimerPreviousValuesFieldPolicy,
	},
	RouteSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RouteSubscriptionPayloadKeySpecifier | (() => undefined | RouteSubscriptionPayloadKeySpecifier),
		fields?: RouteSubscriptionPayloadFieldPolicy,
	},
	RoutePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoutePreviousValuesKeySpecifier | (() => undefined | RoutePreviousValuesKeySpecifier),
		fields?: RoutePreviousValuesFieldPolicy,
	},
	CodeChallengeSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeSubscriptionPayloadKeySpecifier | (() => undefined | CodeChallengeSubscriptionPayloadKeySpecifier),
		fields?: CodeChallengeSubscriptionPayloadFieldPolicy,
	},
	CodeChallengePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengePreviousValuesKeySpecifier | (() => undefined | CodeChallengePreviousValuesKeySpecifier),
		fields?: CodeChallengePreviousValuesFieldPolicy,
	},
	CodeChallengeBlockSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockSubscriptionPayloadKeySpecifier | (() => undefined | CodeChallengeBlockSubscriptionPayloadKeySpecifier),
		fields?: CodeChallengeBlockSubscriptionPayloadFieldPolicy,
	},
	CodeChallengeBlockPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeBlockPreviousValuesKeySpecifier | (() => undefined | CodeChallengeBlockPreviousValuesKeySpecifier),
		fields?: CodeChallengeBlockPreviousValuesFieldPolicy,
	},
	CommentSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentSubscriptionPayloadKeySpecifier | (() => undefined | CommentSubscriptionPayloadKeySpecifier),
		fields?: CommentSubscriptionPayloadFieldPolicy,
	},
	CommentPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentPreviousValuesKeySpecifier | (() => undefined | CommentPreviousValuesKeySpecifier),
		fields?: CommentPreviousValuesFieldPolicy,
	},
	TechnologyLessonSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonSubscriptionPayloadKeySpecifier | (() => undefined | TechnologyLessonSubscriptionPayloadKeySpecifier),
		fields?: TechnologyLessonSubscriptionPayloadFieldPolicy,
	},
	TechnologyLessonPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonPreviousValuesKeySpecifier | (() => undefined | TechnologyLessonPreviousValuesKeySpecifier),
		fields?: TechnologyLessonPreviousValuesFieldPolicy,
	},
	CareerSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerSubscriptionPayloadKeySpecifier | (() => undefined | CareerSubscriptionPayloadKeySpecifier),
		fields?: CareerSubscriptionPayloadFieldPolicy,
	},
	CareerPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CareerPreviousValuesKeySpecifier | (() => undefined | CareerPreviousValuesKeySpecifier),
		fields?: CareerPreviousValuesFieldPolicy,
	},
	TechnologyLessonUserSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonUserSubscriptionPayloadKeySpecifier | (() => undefined | TechnologyLessonUserSubscriptionPayloadKeySpecifier),
		fields?: TechnologyLessonUserSubscriptionPayloadFieldPolicy,
	},
	TechnologyLessonUserPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyLessonUserPreviousValuesKeySpecifier | (() => undefined | TechnologyLessonUserPreviousValuesKeySpecifier),
		fields?: TechnologyLessonUserPreviousValuesFieldPolicy,
	},
	UserTechnologySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologySubscriptionPayloadKeySpecifier | (() => undefined | UserTechnologySubscriptionPayloadKeySpecifier),
		fields?: UserTechnologySubscriptionPayloadFieldPolicy,
	},
	UserTechnologyPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserTechnologyPreviousValuesKeySpecifier | (() => undefined | UserTechnologyPreviousValuesKeySpecifier),
		fields?: UserTechnologyPreviousValuesFieldPolicy,
	},
	TechnologySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologySubscriptionPayloadKeySpecifier | (() => undefined | TechnologySubscriptionPayloadKeySpecifier),
		fields?: TechnologySubscriptionPayloadFieldPolicy,
	},
	TechnologyPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TechnologyPreviousValuesKeySpecifier | (() => undefined | TechnologyPreviousValuesKeySpecifier),
		fields?: TechnologyPreviousValuesFieldPolicy,
	},
	TeamSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamSubscriptionPayloadKeySpecifier | (() => undefined | TeamSubscriptionPayloadKeySpecifier),
		fields?: TeamSubscriptionPayloadFieldPolicy,
	},
	TeamPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamPreviousValuesKeySpecifier | (() => undefined | TeamPreviousValuesKeySpecifier),
		fields?: TeamPreviousValuesFieldPolicy,
	},
	ProjectSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectSubscriptionPayloadKeySpecifier | (() => undefined | ProjectSubscriptionPayloadKeySpecifier),
		fields?: ProjectSubscriptionPayloadFieldPolicy,
	},
	ProjectPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectPreviousValuesKeySpecifier | (() => undefined | ProjectPreviousValuesKeySpecifier),
		fields?: ProjectPreviousValuesFieldPolicy,
	},
	TemplateSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateSubscriptionPayloadKeySpecifier | (() => undefined | TemplateSubscriptionPayloadKeySpecifier),
		fields?: TemplateSubscriptionPayloadFieldPolicy,
	},
	TemplatePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplatePreviousValuesKeySpecifier | (() => undefined | TemplatePreviousValuesKeySpecifier),
		fields?: TemplatePreviousValuesFieldPolicy,
	},
	ResourceSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceSubscriptionPayloadKeySpecifier | (() => undefined | ResourceSubscriptionPayloadKeySpecifier),
		fields?: ResourceSubscriptionPayloadFieldPolicy,
	},
	ResourcePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourcePreviousValuesKeySpecifier | (() => undefined | ResourcePreviousValuesKeySpecifier),
		fields?: ResourcePreviousValuesFieldPolicy,
	},
	ChatMessageSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageSubscriptionPayloadKeySpecifier | (() => undefined | ChatMessageSubscriptionPayloadKeySpecifier),
		fields?: ChatMessageSubscriptionPayloadFieldPolicy,
	},
	ChatMessagePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessagePreviousValuesKeySpecifier | (() => undefined | ChatMessagePreviousValuesKeySpecifier),
		fields?: ChatMessagePreviousValuesFieldPolicy,
	},
	UserSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserSubscriptionPayloadKeySpecifier | (() => undefined | UserSubscriptionPayloadKeySpecifier),
		fields?: UserSubscriptionPayloadFieldPolicy,
	},
	UserPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserPreviousValuesKeySpecifier | (() => undefined | UserPreviousValuesKeySpecifier),
		fields?: UserPreviousValuesFieldPolicy,
	},
	ImportResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportResponseKeySpecifier | (() => undefined | ImportResponseKeySpecifier),
		fields?: ImportResponseFieldPolicy,
	},
	Import?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportKeySpecifier | (() => undefined | ImportKeySpecifier),
		fields?: ImportFieldPolicy,
	},
	Log?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogKeySpecifier | (() => undefined | LogKeySpecifier),
		fields?: LogFieldPolicy,
	},
	AggregateBlock?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateBlockKeySpecifier | (() => undefined | AggregateBlockKeySpecifier),
		fields?: AggregateBlockFieldPolicy,
	},
	AggregateChatMessageReaded?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatMessageReadedKeySpecifier | (() => undefined | AggregateChatMessageReadedKeySpecifier),
		fields?: AggregateChatMessageReadedFieldPolicy,
	},
	AggregateChatRoomInvitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateChatRoomInvitationKeySpecifier | (() => undefined | AggregateChatRoomInvitationKeySpecifier),
		fields?: AggregateChatRoomInvitationFieldPolicy,
	},
	AggregateFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateFileKeySpecifier | (() => undefined | AggregateFileKeySpecifier),
		fields?: AggregateFileFieldPolicy,
	},
	AggregateImport?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateImportKeySpecifier | (() => undefined | AggregateImportKeySpecifier),
		fields?: AggregateImportFieldPolicy,
	},
	AggregateInventory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateInventoryKeySpecifier | (() => undefined | AggregateInventoryKeySpecifier),
		fields?: AggregateInventoryFieldPolicy,
	},
	AggregateLetsadsSmsMessageStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLetsadsSmsMessageStatusKeySpecifier | (() => undefined | AggregateLetsadsSmsMessageStatusKeySpecifier),
		fields?: AggregateLetsadsSmsMessageStatusFieldPolicy,
	},
	AggregateLetsadsSmsMessageStatusItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLetsadsSmsMessageStatusItemKeySpecifier | (() => undefined | AggregateLetsadsSmsMessageStatusItemKeySpecifier),
		fields?: AggregateLetsadsSmsMessageStatusItemFieldPolicy,
	},
	AggregateLetter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLetterKeySpecifier | (() => undefined | AggregateLetterKeySpecifier),
		fields?: AggregateLetterFieldPolicy,
	},
	AggregateLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLogKeySpecifier | (() => undefined | AggregateLogKeySpecifier),
		fields?: AggregateLogFieldPolicy,
	},
	AggregateLogedIn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateLogedInKeySpecifier | (() => undefined | AggregateLogedInKeySpecifier),
		fields?: AggregateLogedInFieldPolicy,
	},
	AggregateMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateMessageKeySpecifier | (() => undefined | AggregateMessageKeySpecifier),
		fields?: AggregateMessageFieldPolicy,
	},
	AggregatePlayer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregatePlayerKeySpecifier | (() => undefined | AggregatePlayerKeySpecifier),
		fields?: AggregatePlayerFieldPolicy,
	},
	AggregateProjectTask?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateProjectTaskKeySpecifier | (() => undefined | AggregateProjectTaskKeySpecifier),
		fields?: AggregateProjectTaskFieldPolicy,
	},
	AggregateResetPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateResetPasswordKeySpecifier | (() => undefined | AggregateResetPasswordKeySpecifier),
		fields?: AggregateResetPasswordFieldPolicy,
	},
	AggregateServiceCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateServiceCategoryKeySpecifier | (() => undefined | AggregateServiceCategoryKeySpecifier),
		fields?: AggregateServiceCategoryFieldPolicy,
	},
	AggregateSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateSettingsKeySpecifier | (() => undefined | AggregateSettingsKeySpecifier),
		fields?: AggregateSettingsFieldPolicy,
	},
	AggregateSmsMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateSmsMessageKeySpecifier | (() => undefined | AggregateSmsMessageKeySpecifier),
		fields?: AggregateSmsMessageFieldPolicy,
	},
	AggregateSmsProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateSmsProviderKeySpecifier | (() => undefined | AggregateSmsProviderKeySpecifier),
		fields?: AggregateSmsProviderFieldPolicy,
	},
	AggregateTaskMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTaskMemberKeySpecifier | (() => undefined | AggregateTaskMemberKeySpecifier),
		fields?: AggregateTaskMemberFieldPolicy,
	},
	AggregateTourneyPlayer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateTourneyPlayerKeySpecifier | (() => undefined | AggregateTourneyPlayerKeySpecifier),
		fields?: AggregateTourneyPlayerFieldPolicy,
	},
	AggregateUserGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AggregateUserGroupKeySpecifier | (() => undefined | AggregateUserGroupKeySpecifier),
		fields?: AggregateUserGroupFieldPolicy,
	},
	BlockConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlockConnectionKeySpecifier | (() => undefined | BlockConnectionKeySpecifier),
		fields?: BlockConnectionFieldPolicy,
	},
	BlockEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlockEdgeKeySpecifier | (() => undefined | BlockEdgeKeySpecifier),
		fields?: BlockEdgeFieldPolicy,
	},
	BlockPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlockPreviousValuesKeySpecifier | (() => undefined | BlockPreviousValuesKeySpecifier),
		fields?: BlockPreviousValuesFieldPolicy,
	},
	BlockSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlockSubscriptionPayloadKeySpecifier | (() => undefined | BlockSubscriptionPayloadKeySpecifier),
		fields?: BlockSubscriptionPayloadFieldPolicy,
	},
	ChatMessageReadedConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedConnectionKeySpecifier | (() => undefined | ChatMessageReadedConnectionKeySpecifier),
		fields?: ChatMessageReadedConnectionFieldPolicy,
	},
	ChatMessageReadedEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatMessageReadedEdgeKeySpecifier | (() => undefined | ChatMessageReadedEdgeKeySpecifier),
		fields?: ChatMessageReadedEdgeFieldPolicy,
	},
	ChatRoomInvitationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationConnectionKeySpecifier | (() => undefined | ChatRoomInvitationConnectionKeySpecifier),
		fields?: ChatRoomInvitationConnectionFieldPolicy,
	},
	ChatRoomInvitationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationEdgeKeySpecifier | (() => undefined | ChatRoomInvitationEdgeKeySpecifier),
		fields?: ChatRoomInvitationEdgeFieldPolicy,
	},
	ChatRoomInvitationPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationPreviousValuesKeySpecifier | (() => undefined | ChatRoomInvitationPreviousValuesKeySpecifier),
		fields?: ChatRoomInvitationPreviousValuesFieldPolicy,
	},
	ChatRoomInvitationSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatRoomInvitationSubscriptionPayloadKeySpecifier | (() => undefined | ChatRoomInvitationSubscriptionPayloadKeySpecifier),
		fields?: ChatRoomInvitationSubscriptionPayloadFieldPolicy,
	},
	CodeChallengeCompletionPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionPreviousValuesKeySpecifier | (() => undefined | CodeChallengeCompletionPreviousValuesKeySpecifier),
		fields?: CodeChallengeCompletionPreviousValuesFieldPolicy,
	},
	CodeChallengeCompletionSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CodeChallengeCompletionSubscriptionPayloadKeySpecifier | (() => undefined | CodeChallengeCompletionSubscriptionPayloadKeySpecifier),
		fields?: CodeChallengeCompletionSubscriptionPayloadFieldPolicy,
	},
	EthAccountPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountPreviousValuesKeySpecifier | (() => undefined | EthAccountPreviousValuesKeySpecifier),
		fields?: EthAccountPreviousValuesFieldPolicy,
	},
	EthAccountSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthAccountSubscriptionPayloadKeySpecifier | (() => undefined | EthAccountSubscriptionPayloadKeySpecifier),
		fields?: EthAccountSubscriptionPayloadFieldPolicy,
	},
	EthBlockPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockPreviousValuesKeySpecifier | (() => undefined | EthBlockPreviousValuesKeySpecifier),
		fields?: EthBlockPreviousValuesFieldPolicy,
	},
	EthBlockSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockSubscriptionPayloadKeySpecifier | (() => undefined | EthBlockSubscriptionPayloadKeySpecifier),
		fields?: EthBlockSubscriptionPayloadFieldPolicy,
	},
	EthContractSourcePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourcePreviousValuesKeySpecifier | (() => undefined | EthContractSourcePreviousValuesKeySpecifier),
		fields?: EthContractSourcePreviousValuesFieldPolicy,
	},
	EthContractSourceSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthContractSourceSubscriptionPayloadKeySpecifier | (() => undefined | EthContractSourceSubscriptionPayloadKeySpecifier),
		fields?: EthContractSourceSubscriptionPayloadFieldPolicy,
	},
	EthTransactionPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthTransactionPreviousValuesKeySpecifier | (() => undefined | EthTransactionPreviousValuesKeySpecifier),
		fields?: EthTransactionPreviousValuesFieldPolicy,
	},
	FileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileConnectionKeySpecifier | (() => undefined | FileConnectionKeySpecifier),
		fields?: FileConnectionFieldPolicy,
	},
	FileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileEdgeKeySpecifier | (() => undefined | FileEdgeKeySpecifier),
		fields?: FileEdgeFieldPolicy,
	},
	FilePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilePreviousValuesKeySpecifier | (() => undefined | FilePreviousValuesKeySpecifier),
		fields?: FilePreviousValuesFieldPolicy,
	},
	FileSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileSubscriptionPayloadKeySpecifier | (() => undefined | FileSubscriptionPayloadKeySpecifier),
		fields?: FileSubscriptionPayloadFieldPolicy,
	},
	ImportConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportConnectionKeySpecifier | (() => undefined | ImportConnectionKeySpecifier),
		fields?: ImportConnectionFieldPolicy,
	},
	ImportEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportEdgeKeySpecifier | (() => undefined | ImportEdgeKeySpecifier),
		fields?: ImportEdgeFieldPolicy,
	},
	ImportPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportPreviousValuesKeySpecifier | (() => undefined | ImportPreviousValuesKeySpecifier),
		fields?: ImportPreviousValuesFieldPolicy,
	},
	ImportSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ImportSubscriptionPayloadKeySpecifier | (() => undefined | ImportSubscriptionPayloadKeySpecifier),
		fields?: ImportSubscriptionPayloadFieldPolicy,
	},
	InventoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InventoryConnectionKeySpecifier | (() => undefined | InventoryConnectionKeySpecifier),
		fields?: InventoryConnectionFieldPolicy,
	},
	InventoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InventoryEdgeKeySpecifier | (() => undefined | InventoryEdgeKeySpecifier),
		fields?: InventoryEdgeFieldPolicy,
	},
	InventoryPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InventoryPreviousValuesKeySpecifier | (() => undefined | InventoryPreviousValuesKeySpecifier),
		fields?: InventoryPreviousValuesFieldPolicy,
	},
	InventorySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InventorySubscriptionPayloadKeySpecifier | (() => undefined | InventorySubscriptionPayloadKeySpecifier),
		fields?: InventorySubscriptionPayloadFieldPolicy,
	},
	LetsadsSmsMessageStatusConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusConnectionKeySpecifier | (() => undefined | LetsadsSmsMessageStatusConnectionKeySpecifier),
		fields?: LetsadsSmsMessageStatusConnectionFieldPolicy,
	},
	LetsadsSmsMessageStatusEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusEdgeKeySpecifier | (() => undefined | LetsadsSmsMessageStatusEdgeKeySpecifier),
		fields?: LetsadsSmsMessageStatusEdgeFieldPolicy,
	},
	LetsadsSmsMessageStatusItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemConnectionKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemConnectionKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemConnectionFieldPolicy,
	},
	LetsadsSmsMessageStatusItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemEdgeKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemEdgeKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemEdgeFieldPolicy,
	},
	LetsadsSmsMessageStatusItemPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemPreviousValuesKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemPreviousValuesFieldPolicy,
	},
	LetsadsSmsMessageStatusItemSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier | (() => undefined | LetsadsSmsMessageStatusItemSubscriptionPayloadKeySpecifier),
		fields?: LetsadsSmsMessageStatusItemSubscriptionPayloadFieldPolicy,
	},
	LetsadsSmsMessageStatusPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusPreviousValuesKeySpecifier | (() => undefined | LetsadsSmsMessageStatusPreviousValuesKeySpecifier),
		fields?: LetsadsSmsMessageStatusPreviousValuesFieldPolicy,
	},
	LetsadsSmsMessageStatusSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier | (() => undefined | LetsadsSmsMessageStatusSubscriptionPayloadKeySpecifier),
		fields?: LetsadsSmsMessageStatusSubscriptionPayloadFieldPolicy,
	},
	Letter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterKeySpecifier | (() => undefined | LetterKeySpecifier),
		fields?: LetterFieldPolicy,
	},
	LetterConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterConnectionKeySpecifier | (() => undefined | LetterConnectionKeySpecifier),
		fields?: LetterConnectionFieldPolicy,
	},
	LetterEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterEdgeKeySpecifier | (() => undefined | LetterEdgeKeySpecifier),
		fields?: LetterEdgeFieldPolicy,
	},
	LetterPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterPreviousValuesKeySpecifier | (() => undefined | LetterPreviousValuesKeySpecifier),
		fields?: LetterPreviousValuesFieldPolicy,
	},
	LetterSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LetterSubscriptionPayloadKeySpecifier | (() => undefined | LetterSubscriptionPayloadKeySpecifier),
		fields?: LetterSubscriptionPayloadFieldPolicy,
	},
	LogConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogConnectionKeySpecifier | (() => undefined | LogConnectionKeySpecifier),
		fields?: LogConnectionFieldPolicy,
	},
	LogEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogEdgeKeySpecifier | (() => undefined | LogEdgeKeySpecifier),
		fields?: LogEdgeFieldPolicy,
	},
	LogedInConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInConnectionKeySpecifier | (() => undefined | LogedInConnectionKeySpecifier),
		fields?: LogedInConnectionFieldPolicy,
	},
	LogedInEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInEdgeKeySpecifier | (() => undefined | LogedInEdgeKeySpecifier),
		fields?: LogedInEdgeFieldPolicy,
	},
	LogedInPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInPreviousValuesKeySpecifier | (() => undefined | LogedInPreviousValuesKeySpecifier),
		fields?: LogedInPreviousValuesFieldPolicy,
	},
	LogedInSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogedInSubscriptionPayloadKeySpecifier | (() => undefined | LogedInSubscriptionPayloadKeySpecifier),
		fields?: LogedInSubscriptionPayloadFieldPolicy,
	},
	LogPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogPreviousValuesKeySpecifier | (() => undefined | LogPreviousValuesKeySpecifier),
		fields?: LogPreviousValuesFieldPolicy,
	},
	LogSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LogSubscriptionPayloadKeySpecifier | (() => undefined | LogSubscriptionPayloadKeySpecifier),
		fields?: LogSubscriptionPayloadFieldPolicy,
	},
	MessageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageConnectionKeySpecifier | (() => undefined | MessageConnectionKeySpecifier),
		fields?: MessageConnectionFieldPolicy,
	},
	MessageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageEdgeKeySpecifier | (() => undefined | MessageEdgeKeySpecifier),
		fields?: MessageEdgeFieldPolicy,
	},
	NotificationTypePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypePreviousValuesKeySpecifier | (() => undefined | NotificationTypePreviousValuesKeySpecifier),
		fields?: NotificationTypePreviousValuesFieldPolicy,
	},
	NotificationTypeSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTypeSubscriptionPayloadKeySpecifier | (() => undefined | NotificationTypeSubscriptionPayloadKeySpecifier),
		fields?: NotificationTypeSubscriptionPayloadFieldPolicy,
	},
	PlayerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerConnectionKeySpecifier | (() => undefined | PlayerConnectionKeySpecifier),
		fields?: PlayerConnectionFieldPolicy,
	},
	PlayerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerEdgeKeySpecifier | (() => undefined | PlayerEdgeKeySpecifier),
		fields?: PlayerEdgeFieldPolicy,
	},
	ProjectTaskConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskConnectionKeySpecifier | (() => undefined | ProjectTaskConnectionKeySpecifier),
		fields?: ProjectTaskConnectionFieldPolicy,
	},
	ProjectTaskEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskEdgeKeySpecifier | (() => undefined | ProjectTaskEdgeKeySpecifier),
		fields?: ProjectTaskEdgeFieldPolicy,
	},
	ProjectTaskPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskPreviousValuesKeySpecifier | (() => undefined | ProjectTaskPreviousValuesKeySpecifier),
		fields?: ProjectTaskPreviousValuesFieldPolicy,
	},
	ProjectTaskSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectTaskSubscriptionPayloadKeySpecifier | (() => undefined | ProjectTaskSubscriptionPayloadKeySpecifier),
		fields?: ProjectTaskSubscriptionPayloadFieldPolicy,
	},
	ResetPasswordConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordConnectionKeySpecifier | (() => undefined | ResetPasswordConnectionKeySpecifier),
		fields?: ResetPasswordConnectionFieldPolicy,
	},
	ResetPasswordEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordEdgeKeySpecifier | (() => undefined | ResetPasswordEdgeKeySpecifier),
		fields?: ResetPasswordEdgeFieldPolicy,
	},
	ResetPasswordPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordPreviousValuesKeySpecifier | (() => undefined | ResetPasswordPreviousValuesKeySpecifier),
		fields?: ResetPasswordPreviousValuesFieldPolicy,
	},
	ResetPasswordSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetPasswordSubscriptionPayloadKeySpecifier | (() => undefined | ResetPasswordSubscriptionPayloadKeySpecifier),
		fields?: ResetPasswordSubscriptionPayloadFieldPolicy,
	},
	ResourceTagPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagPreviousValuesKeySpecifier | (() => undefined | ResourceTagPreviousValuesKeySpecifier),
		fields?: ResourceTagPreviousValuesFieldPolicy,
	},
	ResourceTagSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResourceTagSubscriptionPayloadKeySpecifier | (() => undefined | ResourceTagSubscriptionPayloadKeySpecifier),
		fields?: ResourceTagSubscriptionPayloadFieldPolicy,
	},
	ServiceCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceCategoryConnectionKeySpecifier | (() => undefined | ServiceCategoryConnectionKeySpecifier),
		fields?: ServiceCategoryConnectionFieldPolicy,
	},
	ServiceCategoryEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceCategoryEdgeKeySpecifier | (() => undefined | ServiceCategoryEdgeKeySpecifier),
		fields?: ServiceCategoryEdgeFieldPolicy,
	},
	ServiceCategoryPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceCategoryPreviousValuesKeySpecifier | (() => undefined | ServiceCategoryPreviousValuesKeySpecifier),
		fields?: ServiceCategoryPreviousValuesFieldPolicy,
	},
	ServiceCategorySubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceCategorySubscriptionPayloadKeySpecifier | (() => undefined | ServiceCategorySubscriptionPayloadKeySpecifier),
		fields?: ServiceCategorySubscriptionPayloadFieldPolicy,
	},
	SettingsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsConnectionKeySpecifier | (() => undefined | SettingsConnectionKeySpecifier),
		fields?: SettingsConnectionFieldPolicy,
	},
	SettingsEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsEdgeKeySpecifier | (() => undefined | SettingsEdgeKeySpecifier),
		fields?: SettingsEdgeFieldPolicy,
	},
	SettingsPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsPreviousValuesKeySpecifier | (() => undefined | SettingsPreviousValuesKeySpecifier),
		fields?: SettingsPreviousValuesFieldPolicy,
	},
	SettingsSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsSubscriptionPayloadKeySpecifier | (() => undefined | SettingsSubscriptionPayloadKeySpecifier),
		fields?: SettingsSubscriptionPayloadFieldPolicy,
	},
	SmsMessageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageConnectionKeySpecifier | (() => undefined | SmsMessageConnectionKeySpecifier),
		fields?: SmsMessageConnectionFieldPolicy,
	},
	SmsMessageEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageEdgeKeySpecifier | (() => undefined | SmsMessageEdgeKeySpecifier),
		fields?: SmsMessageEdgeFieldPolicy,
	},
	SmsMessagePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessagePreviousValuesKeySpecifier | (() => undefined | SmsMessagePreviousValuesKeySpecifier),
		fields?: SmsMessagePreviousValuesFieldPolicy,
	},
	SmsMessageSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsMessageSubscriptionPayloadKeySpecifier | (() => undefined | SmsMessageSubscriptionPayloadKeySpecifier),
		fields?: SmsMessageSubscriptionPayloadFieldPolicy,
	},
	SmsProviderConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderConnectionKeySpecifier | (() => undefined | SmsProviderConnectionKeySpecifier),
		fields?: SmsProviderConnectionFieldPolicy,
	},
	SmsProviderEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderEdgeKeySpecifier | (() => undefined | SmsProviderEdgeKeySpecifier),
		fields?: SmsProviderEdgeFieldPolicy,
	},
	SmsProviderPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderPreviousValuesKeySpecifier | (() => undefined | SmsProviderPreviousValuesKeySpecifier),
		fields?: SmsProviderPreviousValuesFieldPolicy,
	},
	SmsProviderSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SmsProviderSubscriptionPayloadKeySpecifier | (() => undefined | SmsProviderSubscriptionPayloadKeySpecifier),
		fields?: SmsProviderSubscriptionPayloadFieldPolicy,
	},
	TagPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagPreviousValuesKeySpecifier | (() => undefined | TagPreviousValuesKeySpecifier),
		fields?: TagPreviousValuesFieldPolicy,
	},
	TagSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagSubscriptionPayloadKeySpecifier | (() => undefined | TagSubscriptionPayloadKeySpecifier),
		fields?: TagSubscriptionPayloadFieldPolicy,
	},
	TaskMemberConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskMemberConnectionKeySpecifier | (() => undefined | TaskMemberConnectionKeySpecifier),
		fields?: TaskMemberConnectionFieldPolicy,
	},
	TaskMemberEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskMemberEdgeKeySpecifier | (() => undefined | TaskMemberEdgeKeySpecifier),
		fields?: TaskMemberEdgeFieldPolicy,
	},
	TaskMemberPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskMemberPreviousValuesKeySpecifier | (() => undefined | TaskMemberPreviousValuesKeySpecifier),
		fields?: TaskMemberPreviousValuesFieldPolicy,
	},
	TaskMemberSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaskMemberSubscriptionPayloadKeySpecifier | (() => undefined | TaskMemberSubscriptionPayloadKeySpecifier),
		fields?: TaskMemberSubscriptionPayloadFieldPolicy,
	},
	TestPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestPreviousValuesKeySpecifier | (() => undefined | TestPreviousValuesKeySpecifier),
		fields?: TestPreviousValuesFieldPolicy,
	},
	TestSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TestSubscriptionPayloadKeySpecifier | (() => undefined | TestSubscriptionPayloadKeySpecifier),
		fields?: TestSubscriptionPayloadFieldPolicy,
	},
	TourneyPlayerConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPlayerConnectionKeySpecifier | (() => undefined | TourneyPlayerConnectionKeySpecifier),
		fields?: TourneyPlayerConnectionFieldPolicy,
	},
	TourneyPlayerEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPlayerEdgeKeySpecifier | (() => undefined | TourneyPlayerEdgeKeySpecifier),
		fields?: TourneyPlayerEdgeFieldPolicy,
	},
	TourneyPlayerPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPlayerPreviousValuesKeySpecifier | (() => undefined | TourneyPlayerPreviousValuesKeySpecifier),
		fields?: TourneyPlayerPreviousValuesFieldPolicy,
	},
	TourneyPlayerSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TourneyPlayerSubscriptionPayloadKeySpecifier | (() => undefined | TourneyPlayerSubscriptionPayloadKeySpecifier),
		fields?: TourneyPlayerSubscriptionPayloadFieldPolicy,
	},
	UserGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupConnectionKeySpecifier | (() => undefined | UserGroupConnectionKeySpecifier),
		fields?: UserGroupConnectionFieldPolicy,
	},
	UserGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupEdgeKeySpecifier | (() => undefined | UserGroupEdgeKeySpecifier),
		fields?: UserGroupEdgeFieldPolicy,
	},
	UserGroupPreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupPreviousValuesKeySpecifier | (() => undefined | UserGroupPreviousValuesKeySpecifier),
		fields?: UserGroupPreviousValuesFieldPolicy,
	},
	UserGroupSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserGroupSubscriptionPayloadKeySpecifier | (() => undefined | UserGroupSubscriptionPayloadKeySpecifier),
		fields?: UserGroupSubscriptionPayloadFieldPolicy,
	},
	VotePreviousValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VotePreviousValuesKeySpecifier | (() => undefined | VotePreviousValuesKeySpecifier),
		fields?: VotePreviousValuesFieldPolicy,
	},
	VoteSubscriptionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VoteSubscriptionPayloadKeySpecifier | (() => undefined | VoteSubscriptionPayloadKeySpecifier),
		fields?: VoteSubscriptionPayloadFieldPolicy,
	},
	MarketplaceAuthResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarketplaceAuthResponseKeySpecifier | (() => undefined | MarketplaceAuthResponseKeySpecifier),
		fields?: MarketplaceAuthResponseFieldPolicy,
	},
	EthBlockResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthBlockResponseKeySpecifier | (() => undefined | EthBlockResponseKeySpecifier),
		fields?: EthBlockResponseFieldPolicy,
	},
	EthPersonalAccountResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EthPersonalAccountResponseKeySpecifier | (() => undefined | EthPersonalAccountResponseKeySpecifier),
		fields?: EthPersonalAccountResponseFieldPolicy,
	},
	IceCandidate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IceCandidateKeySpecifier | (() => undefined | IceCandidateKeySpecifier),
		fields?: IceCandidateFieldPolicy,
	},
	ServiceCategoryResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ServiceCategoryResponseKeySpecifier | (() => undefined | ServiceCategoryResponseKeySpecifier),
		fields?: ServiceCategoryResponseFieldPolicy,
	}
};