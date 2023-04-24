import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    HTMLAttributeAnchorTarget, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
// @ts-ignore
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { Virtuoso, VirtuosoGridHandle, VirtuosoGridMockContext } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/const/localstorage';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
    virtualized?: boolean;
}

// const Header = () => <ArticlesPageFilters />;

const getSkeletons = () => new Array(3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.SMALL,
        isLoading,
        target,
        virtualized = true,
    } = props;
    const { t } = useTranslation();
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
        setSelectedArticleId(+paged);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === ArticleView.BIG) {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }
    });

    // const isBig = view === ArticleView.BIG;
    //
    // const itemsPerRow = isBig ? 1 : 3;
    // const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);
    //
    // const rowRender = ({
    //     index, isScrolling, key, style,
    // }: ListRowProps) => {
    //     const items = [];
    //     const fromIndex = index * itemsPerRow;
    //     const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);
    //
    //     for (let i = fromIndex; i < toIndex; i += 1) {
    //         items.push(
    //             <ArticleListItem
    //                 article={articles[i]}
    //                 view={view}
    //                 target={target}
    //                 key={`str${i}`}
    //                 className={cls.card}
    //             />,
    //         );
    //     }
    //
    //     return (
    //         <div
    //             key={key}
    //             style={style}
    //             className={cls.row}
    //         >
    //             {items}
    //         </div>
    //     );
    // };

    const renderArticle = (index: number, article: Article) => (
        <ArticleListItem
            article={article}
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
            index={index}
        />
    );

    // eslint-disable-next-line react/no-unstable-nested-components
    const Footer = () => {
        if (isLoading) {
            return (
                <div className={cls.skeleton}>
                    {getSkeletons()}
                </div>
            );
        }
        return <div />;
    };

    const dispatch = useAppDispatch();
    const onLoadNext = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {
                // eslint-disable-next-line no-nested-ternary
                virtualized ? (
                    // @ts-ignore
                    view === ArticleView.BIG ? (
                        <Virtuoso
                            style={{ height: '100%' }}
                            data={articles}
                            itemContent={renderArticle}
                            endReached={onLoadNext}
                            initialTopMostItemIndex={selectedArticleId}
                            components={{
                                // Header,
                                Footer,
                            }}
                        />
                    ) : (
                        ''
                    )
                ) : (
                    articles.map((item) => (
                        <ArticleListItem
                            article={item}
                            view={view}
                            className={cls.card}
                            key={item.id}
                            target={target}
                        />
                    ))
                )
            }

        </div>
    );
});
