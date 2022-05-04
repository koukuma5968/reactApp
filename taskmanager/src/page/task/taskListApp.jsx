import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/main_style.scss';

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projectsel:'',
        }
    }
    render() {
        const options = [
            { value: 'asc', label: '昇順' },
            { value: 'desc', label: '降順' },
        ]
        const CHARACTERS = [
            {
                id: "gambaruzoi",
                name: "がんばるぞい",
            },
            {
                id: "gyp",
                name: "ぎょぱー！",
            },
            {
                id: "iine",
                name: "いいね！",
            },
            {
                id: "shincyoku_doudesuka",
                name: "進捗どうですか",
            },
        ];
        const updateCharacters = (result) => {
            const items = Array.from(characters);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
        
        }
        return (
        <div className={css.main_content}>
            <div className={css.title}>
                <span>タスク一覧</span>
            </div>
            <div className={css.task_sort_doby}>
                <div className={css.task_sort_item}>
                    <span>プロジェクト</span>
                    <Select options={this.props.location.state.projectoption} 
                        onChange={event => this.setState({projectsel: event.value})} />
                </div>
                {/*
                <div className={css.task_sort_item}>
                    <span>プロセス</span>
                    <Select options={options} />
                </div>
                */}
                <div className={css.task_sort_item}>
                    <span>担当者</span>
                    <Select options={this.props.location.state.userMng.id} 
                        onChange={event => this.setState({usersel: event.value})} />
                </div>
                <div className={css.task_sort_item}>
                    <span>期限</span>
                    <Select options={options} 
                        onChange={event => this.setState({projectsel: event.value})} />
                </div>
            </div>
            <div className={css.task_body}>
                <div className={css.task_item}>
                    <div className={css.task_item_title}>
                       <span>未対応</span>
                    </div>
                    <hr className={css.task_item_line_yellow}></hr>
                    <div>
                        <DragDropContext>
                            <Droppable droppableId="characters" handleOnDragEnd={updateCharacters}>
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {CHARACTERS.map(({id, name, thumb}, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="characters-thumb">
                                                    <p>{ name }</p>
                                                </div>
                                            </li>
                                        )}
                                    </Draggable>
                                    );
                                })}
                                 {provided.placeholder}
                                </ul>
                            )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                </div>
                <div className={css.task_item}>
                    <div className={css.task_item_title}>
                       <span>作業中</span>
                    </div>
                    <hr className={css.task_item_line_orange}></hr>
                </div>
                <div className={css.task_item}>
                    <div className={css.task_item_title}>
                       <span>確認中</span>
                    </div>
                    <hr className={css.task_item_line_blue}></hr>
                </div>
                <div className={css.task_item}>
                    <div className={css.task_item_title}>
                        <span>完了</span>
                    </div>
                    <hr className={css.task_item_line_green}></hr>
                </div>
            </div>
        </div>
        );
    }
}
export default TaskList