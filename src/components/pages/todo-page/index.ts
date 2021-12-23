import { TodoPage, TodoPageProps } from "./TodoPage";
import withInteractor from "./TodoPage.interactor"
import withPresenter from "./TodoPage.presenter"

export type { TodoPageProps }
export default withInteractor(withPresenter(TodoPage))
