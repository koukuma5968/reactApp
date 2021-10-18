import React from "react";
import ArticlePageService from '../api/ArticlePageService';
import HeaderLink from '../common/HeaderLink';

class ArticlePage extends React.Component {

    constructor(props){
        super(props)
		this.state = {
            model:'',
            page: this.props.location.state.param
        };
	}

    componentWillMount() {
		ArticlePageService.getArticleHtml(this.state.page).then((response) => {
			this.setState({
                model: response.data.articleBean,
            });
        });
	}

    render() {

        const articleHtml = this.state.model.articleHtml;
        return (
            <main className="main-inner">
                <HeaderLink />
                <div className="ArticlePage">
                    <div className="Article">
                        <iframe width="100%" height="100%" src={"./mobile" + articleHtml + ".html"} />
                    </div>
                </div>
            </main>
        );
    }
}
export default ArticlePage;