import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import Form from '../common/submitform.jsx';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import c_css from '../../common/css/common_style.scss';
import css from '../../common/css/main_style.scss';

class TaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projectlist: this.props.location.state.projectlist
        }
    }
    render() {
        const form = new Form(this.props);
        const options = [
            { value: 'asc', label: '昇順' },
            { value: 'desc', label: '降順' },
        ]
        const onDragStart = result => {}
        const onDragUpdate = result => {}
        const onDragEnd = result => {
            console.log("result");
            console.log(result);
            const { draggableId, source, destination } = result

            if(!destination) {return}
            if(destination.droppableId === source.droppableId && destination.index === source.index) {return}
            let destinationTasks = null;
            let sourceTask = null;
            console.log(this.state.projectlist);
            this.state.projectlist.map((project) => {
                var drags = draggableId.split('&')
                console.log(drags[0]);
                console.log(project);
                if (project.id == drags[0]) {
                    console.log(true);
                    if ("incompatible" == destination.droppableId) {
                        destinationTasks = project.task.incompatible
                    } else if ("working" == destination.droppableId) {
                        destinationTasks = project.task.working
                    } else if ("confirming" == destination.droppableId) {
                        destinationTasks = project.task.confirming
                    } else if ("completed" == destination.droppableId) {
                        destinationTasks = project.task.completed
                    }

                    if ("incompatible" == source.droppableId) {
                        sourceTask = project.task.incompatible
                    } else if ("working" == source.droppableId) {
                        sourceTask = project.task.working
                    } else if ("confirming" == source.droppableId) {
                        sourceTask = project.task.confirming
                    } else if ("completed" == source.droppableId) {
                        sourceTask = project.task.completed
                    }
                }
            })

            destinationTasks.push(sourceTask[source.index]);
            sourceTask.splice(source.index, 1);
            form.taskUpdate(destination.droppableId, destinationTasks);
        }
        const updateCharacters = (result) => {
            const items = Array.from(characters);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
        }
        const projectdata = React.Children.toArray(
            this.state.projectlist.map(project => 
                <div className={css.project_item}>
                    <input id={'acd_check' + project.id} className={c_css.acd_check} type="checkbox" />
                    <label className={c_css.acd_label} htmlFor={'acd_check' + project.id}>{project.name}</label>
                    <div className={c_css.acd_content}>
                        <DragDropContext onDragStart={onDragStart} onDragUpdate={onDragUpdate} onDragEnd={onDragEnd}>
                            <div className={css.task_body}>
                                <Droppable droppableId="incompatible" handleOnDragEnd={updateCharacters}>
                                    {(provided) => (
                                        <div className={css.task_item} {...provided.droppableProps} ref={provided.innerRef}>
                                            <div className={css.task_item_title}>
                                                <span>未対応</span>
                                                <hr className={css.task_item_line_yellow}></hr>
                                                {project.task.incompatible.map(({id, draggableId, name}, index) => {
                                                    return (
                                                        <Draggable key={id} draggableId={project.id+'&'+draggableId} index={index}>
                                                            {(provided) => (
                                                                <div key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <p>{ name }</p>
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </Droppable>
                                <Droppable className={css.task_item} droppableId="working" handleOnDragEnd={updateCharacters}>
                                    {(provided) => (
                                        <div className={css.task_item} {...provided.droppableProps} ref={provided.innerRef}>
                                            <div className={css.task_item_title}>
                                            <span>作業中</span>
                                            <hr className={css.task_item_line_orange}></hr>
                                            {project.task.working.map(({id, draggableId, name}, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={project.id+'&'+draggableId} index={index}>
                                                        {(provided) => (
                                                            <div key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <p>{ name }</p>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                );
                                            })}
                                            </div>
                                        </div>
                                    )}
                                </Droppable>
                                <Droppable droppableId="confirming" handleOnDragEnd={updateCharacters}>
                                    {(provided) => (
                                        <div className={css.task_item} {...provided.droppableProps} ref={provided.innerRef}>
                                            <div className={css.task_item_title}>
                                            <span>確認中</span>
                                            <hr className={css.task_item_line_blue}></hr>
                                            {project.task.confirming.map(({id, draggableId, name}, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={project.id+'&'+draggableId} index={index}>
                                                        {(provided) => (
                                                            <div key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <p>{ name }</p>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                );
                                            })}
                                            </div>
                                        </div>
                                    )}
                                </Droppable>
                                <Droppable droppableId="completed" handleOnDragEnd={updateCharacters}>
                                    {(provided) => (
                                        <div className={css.task_item} {...provided.droppableProps} ref={provided.innerRef}>
                                            <div className={css.task_item_title}>
                                            <span>完了</span>
                                            <hr className={css.task_item_line_green}></hr>
                                            {project.task.completed.map(({id, draggableId, name}, index) => {
                                                return (
                                                    <Draggable key={id} draggableId={project.id+'&'+draggableId} index={index}>
                                                        {(provided) => (
                                                            <div key={id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                <p>{ name }</p>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                );
                                            })}
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </DragDropContext>
                    </div>
                </div>
            )
        )
            
        return (
            <div className={css.main_content}>
                <div className={css.title}>
                    <span>タスク一覧</span>
                </div>
                {/* <div className={css.task_sort_doby}>
                    <div className={css.task_sort_item}>
                        <span>プロジェクト</span>
                        <Select options={this.props.location.state.projectoption} 
                            onChange={event => this.setState({projectsel: event.value})} />
                    </div>
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
                </div> */}
                { 
                    (projectdata != null && projectdata.length != 0) ? 
                    <div>   
                        {projectdata}
                    </div>
                    : 
                    <div className={css.project_item}>   
                        <span>タスクがありません。</span>
                    </div>
                }
            </div>
        );
    }
}
export default TaskList