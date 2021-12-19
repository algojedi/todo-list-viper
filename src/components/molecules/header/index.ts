import { Header, HeaderProps } from "./Header"
import withInteractor from "./Header.interactor"
import withPresenter from "./Header.presenter"

export type { HeaderProps }
export default withInteractor(withPresenter(Header))
