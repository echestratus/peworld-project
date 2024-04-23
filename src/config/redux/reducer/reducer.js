import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerRecruiterReducer from "./registerRecruiterReducer";
import registerWorkerReducer from "./registerWorkerReducer";
import checkRoleReducer from "./checkRoleReducer";
import profileWorkerReducer from "./profileWorkerReducer";
import profileRecruiterReducer from "./profileRecruiterReducer";
import uploadSingleFileReducer from "./uploadSingleFileReducer";
import updateProfileRecruitersReducer from "./updateProfileRecruitersReducer";
import getMySkillReducer from "./getMySkillReducer";
import getSkillPerIdWorkerReducer from "./getSkillPerIdWorkerReducer";
import addSkillReducer from "./addSkillReducer";
import deleteSkillReducer from "./deleteSkillReducer";
import addExperienceReducer from "./addExperienceReducer";
import getExperienceReducer from "./getExperienceReducer";
import getExperiencePerIdWorkerReducer from "./getExperiencePerIdWorkerReducer";
import addPortfolioReducer from "./addPortfolioReducer";
import getPortfolioPerIdWorkerReducer from "./getPortfolioPerIdWorkerReducer";
import uploadImagePortfolioReducer from "./uploadImagePortfolioReducer";
import updatePhotoProfileReducer from "./updatePhotoProfileReducer";
import updateProfileWorkersReducer from "./updateProfileWorkersReducer";
import getWorkerHomeReducer from "./getWorkerHomeReducer";
import detailWorkerReducer from "./detailWorkerReducer";
import addHireReducer from "./addHireReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registerRecruiter: registerRecruiterReducer,
    registerWorker: registerWorkerReducer,
    checkRole: checkRoleReducer,
    profileWorker: profileWorkerReducer,
    profileRecruiter: profileRecruiterReducer,
    uploadSingleFile: uploadSingleFileReducer,
    updateProfileRecruiters: updateProfileRecruitersReducer,
    getMySkill: getMySkillReducer,
    getSkillPerIdWorker: getSkillPerIdWorkerReducer,
    addSkill: addSkillReducer,
    deleteSkill: deleteSkillReducer,
    addExperience: addExperienceReducer,
    getExperience: getExperienceReducer,
    getExperiencePerIdWorker: getExperiencePerIdWorkerReducer,
    addPortfolio: addPortfolioReducer,
    getPortfolioPerIdWorker: getPortfolioPerIdWorkerReducer,
    uploadImagePortfolio: uploadImagePortfolioReducer,
    updatePhotoProfile: updatePhotoProfileReducer,
    updateProfileWorkers: updateProfileWorkersReducer,
    getWorkerHome: getWorkerHomeReducer,
    detailWorker: detailWorkerReducer,
    addHire: addHireReducer
})

export default rootReducer