import React from "react";
import { HeaderProps } from ".";
import { HeaderPresenterProps } from "./Header.presenter";

const withInteractor = (
	Presenter: React.FC<HeaderPresenterProps>
): React.FC<HeaderProps> => {
	const Interactor: React.FC<HeaderProps> = (props) => {
		

		return (
			<Presenter
				{...props}
			/>
		);
	};
	return Interactor;
};
export default withInteractor;