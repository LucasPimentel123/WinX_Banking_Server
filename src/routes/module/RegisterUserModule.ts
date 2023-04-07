import { RegisterUserService } from "../../core/service";
import { RegisterUserController } from "../../entrypoint/controller";

export const registerUserModule = (): RegisterUserController => {
    const service = new RegisterUserService();
    return new RegisterUserController(service);
}