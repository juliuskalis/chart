import {UserModel} from "./user.model";
import {UserDisplayModel} from "./user-display.model";

export interface UserChartModel extends UserModel, UserDisplayModel {}
