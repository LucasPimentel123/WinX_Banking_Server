import { LoginUserService } from "../../core/service";
import { LoginUserController } from "../../entrypoint/controller";

export const loginUserModule = (): LoginUserController => {
    const service = new LoginUserService();
    return new LoginUserController(service);
}