import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
// import { useReducer, useRef, useState } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from 'src/ui/select';

type ArticleParamsFormProps = {
	currentArticle: ArticleStateType;
	setCurrentArticle: (param: ArticleStateType) => void;
};

// мэйби надо будет пропсы подругому передать
export const ArticleParamsForm = (props: ArticleParamsFormProps) => {
	const { currentArticle, setCurrentArticle } = props;
	const [isOpen, setIsOpen] = useState<boolean>(false);
	// const rootRef = useRef<HTMLDivElement>(null);
	const [selectArticle, setSelectArticle] =
		useState<ArticleStateType>(currentArticle);

	const handleChange = (key: keyof ArticleStateType, value: OptionType) => {
		setSelectArticle({ ...selectArticle, [key]: value });
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={setIsOpen} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						setCurrentArticle(selectArticle); // обновляем данные у родителя
					}}>
					<Select
						options={fontColors} // форимрует выпадающий список
						selected={selectArticle.fontColor} // текущий селект (который отображает в свернутом виде)
						onChange={(option) => handleChange('fontColor', option)} // option: тут то, что придет из компонента Select, тот эл-т над еоторым совершили клик и выбрали его
						title='Цвет'
					/>

					<Select
						options={backgroundColors} // форимрует выпадающий список
						selected={selectArticle.backgroundColor} // текущий селект (который отображает в свернутом виде)
						onChange={(option) => handleChange('backgroundColor', option)} // option: тут то, что придет из компонента Select, тот эл-т над еоторым совершили клик и выбрали его
						title='Цвет фона'
					/>

					<Select
						options={contentWidthArr} // форимрует выпадающий список
						selected={selectArticle.contentWidth} // текущий селект (который отображает в свернутом виде)
						onChange={(option) => handleChange('contentWidth', option)} // option: тут то, что придет из компонента Select, тот эл-т над еоторым совершили клик и выбрали его
						title='Ширина контента'
					/>

					<Select
						options={fontFamilyOptions} // форимрует выпадающий список
						selected={selectArticle.fontFamilyOption} // текущий селект (который отображает в свернутом виде)
						onChange={(option) => handleChange('fontFamilyOption', option)} // option: тут то, что придет из компонента Select, тот эл-т над еоторым совершили клик и выбрали его
						title='Шрифт текста'
					/>

					<Select
						options={fontSizeOptions} // форимрует выпадающий список
						selected={selectArticle.fontSizeOption} // текущий селект (который отображает в свернутом виде)
						onChange={(option) => handleChange('fontSizeOption', option)} // option: тут то, что придет из компонента Select, тот эл-т над еоторым совершили клик и выбрали его
						title='Размер текста'
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
