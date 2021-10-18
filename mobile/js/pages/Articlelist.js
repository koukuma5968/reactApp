import React from "react";
import ArticleListService from '../api/ArticleListService';
import PanelRightPage from './PanelRightPage';
import HeaderLink from '../common/HeaderLink';

class ArticleList extends React.Component {

      constructor(props){
        super(props)
        this.articlesubmit = this.articlesubmit.bind(this);
		this.state = {
            model: [],
            param: ''
        };
    }

	componentWillMount() {
		ArticleListService.getArticle().then((response) => {
			this.setState({
                model: response.data.articleList
            });
        });
    }

    articlesubmit(articlepage){
        console.log('submit');
        console.log(articlepage);
        this.props.history.push({
            pathname: '/blog/article?get=' + articlepage,
            state: { param: articlepage }
        });
    }

    render() {

        const articleList = React.Children.toArray(
            this.state.model.map(article => 
                <div className="menu">
                    <a onClick={() => this.articlesubmit(article.encParam)} >
                        <span className="title">
                            <span>{article.articleMNG.title}</span>
                        </span>
                        <span className="remarks">
                            <span className="cate">{"カテゴリ：" + article.articleMNG.category_name}</span>
                            <span className="cate">{"言語：" +  article.articleMNG.language_name}</span>
                            <span className="time">{article.articleMNG.reg_DATE}</span>
                        </span>
                    </a>
                </div>
            ),
        );
        return (
            <main className="main-inner">
                <HeaderLink />
                <div className="mainarea">
                    <div className="menulist">
                        {articleList}
                    </div>
                </div>
            </main>
        );
    }

};
export default ArticleList;