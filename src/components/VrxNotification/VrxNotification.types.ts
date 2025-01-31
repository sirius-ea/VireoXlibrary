

export interface IVrxNotificationUseCase {
    addNotification: (message: string, type: "success" | "warning" | "error", duration: number) => void;
}
