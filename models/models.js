
/*
 * Models
 * Created By: Jay Wilson
 * Date: 12/19/2014
 */
 


/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_TYPE`
-- ---------------------------------------------------*/
ProjectType = new global.db.dbConn({tableName: "PROJECT_TYPE"});
exports.ProjectType = ProjectType;


/*----------------------------------------------------
-- Table `ProjectMe`.`BACKGROUNDS`
-- ---------------------------------------------------*/
Backgrounds = new global.db.dbConn({tableName: "BACKGROUNDS"});
exports.Backgrounds = Backgrounds;


/*----------------------------------------------------
-- Table `ProjectMe`.`MODERATION_STATUS`
-- ---------------------------------------------------*/
ModerationStatus = new global.db.dbConn({tableName: "MODERATION_STATUS"});
exports.ModerationStatus = ModerationStatus;


/*----------------------------------------------------
-- Table `ProjectMe`.`MODERATION_USER`
-- ---------------------------------------------------*/
ModerationUser = new global.db.dbConn({tableName: "MODERATION_USER"});
exports.ModerationUser = ModerationUser;


/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_IMAGE`
-- ---------------------------------------------------*/
ProjectImage = new global.db.dbConn({tableName: "PROJECT_IMAGE"});
exports.ProjectImage = ProjectImage;


/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_USER`
-- ---------------------------------------------------*/
ProjectUser = new global.db.dbConn({tableName: "PROJECT_USER"});
exports.ProjectUser = ProjectUser;


/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT`
-- ---------------------------------------------------*/
Project = new global.db.dbConn({tableName: "PROJECT"});
exports.Project = Project;

/*----------------------------------------------------
-- Table `ProjectMe`.`ASSET_LIBRARY`
-- ---------------------------------------------------*/
AssetLibrary = new global.db.dbConn({tableName: "ASSET_LIBRARY"});
exports.AssetLibrary = AssetLibrary;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_CONTENT`
-- ---------------------------------------------------*/
ProjectContent = new global.db.dbConn({tableName: "PROJECT_CONTENT"});
exports.ProjectContent = ProjectContent;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_DO_ACTIVITY`
-- ---------------------------------------------------*/
ProjectDoActivity = new global.db.dbConn({tableName: "PROJECT_DO_ACTIVITY"});
exports.ProjectDoActivity = ProjectDoActivity;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_DO_ACTIVITY_ITEMS`
-- ---------------------------------------------------*/
ProjectDoActivityItems = new global.db.dbConn({tableName: "PROJECT_DO_ACTIVITY_ITEMS"});
exports.ProjectDoActivityItems = ProjectDoActivityItems;

/*----------------------------------------------------
-- Table `ProjectMe`.`GLOBAL_INTERFACE_COPY`
-- ---------------------------------------------------*/
GlobalInterfaceCopy = new global.db.dbConn({tableName: "GLOBAL_INTERFACE_COPY"});
exports.GlobalInterfaceCopy = GlobalInterfaceCopy;

/*----------------------------------------------------
-- Table `ProjectMe`.`DREAM_GALLERY_ASSET`
-- ---------------------------------------------------*/
DreamGalleryAsset = new global.db.dbConn({tableName: "DREAM_GALLERY_ASSET"});
exports.DreamGalleryAsset = DreamGalleryAsset;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_DREAM_BOARD`
-- ---------------------------------------------------*/
ProjectDreamBoard = new global.db.dbConn({tableName: "PROJECT_DREAM_BOARD"});
exports.ProjectDreamBoard = ProjectDreamBoard;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_ACTIVITY_STATUS`
-- ---------------------------------------------------*/
ProjectActivityStatus = new global.db.dbConn({tableName: "PROJECT_ACTIVITY_STATUS"});
exports.ProjectActivityStatus = ProjectActivityStatus;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_NOTIFICATION`
-- ---------------------------------------------------*/
ProjectNotification = new global.db.dbConn({tableName: "PROJECT_NOTIFICATION"});
exports.ProjectNotification = ProjectNotification;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_TYPE_NOTIFICATION`
-- ---------------------------------------------------*/
ProjectTypeNotification = new global.db.dbConn({tableName: "PROJECT_TYPE_NOTIFICATION"});
exports.ProjectTypeNotification = ProjectTypeNotification;

/*----------------------------------------------------
-- Table `ProjectMe`.`PROJECT_DREAM_BOARD_SUPPORT`
-- ---------------------------------------------------*/
ProjectDreamBoardSupport = new global.db.dbConn({tableName: "PROJECT_DREAM_BOARD_SUPPORT"});
exports.ProjectDreamBoardSupport = ProjectDreamBoardSupport;