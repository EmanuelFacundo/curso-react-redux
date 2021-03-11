import Axios from 'axios'
import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = {description:'', list: []}

        this.setState = this.setState.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleOnChanger = this.handleOnChanger.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handlerMarkAsDone = this.handlerMarkAsDone.bind(this)
        this.handlerMarkAsPending = this.handlerMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        Axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleClear(){
        this.refresh()
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleOnChanger(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        Axios.post(URL, {description})
            .then(resp => this.refresh())
    }

    handleRemove(todo) {
        Axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))

    }

    handlerMarkAsDone(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handlerMarkAsPending(todo){
        Axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <PageHeader 
                    name='Tarefas' 
                    small='cadastro' />
                <TodoForm 
                    description={this.state.description}
                    handleAdd={this.handleAdd} 
                    handleOnChanger={this.handleOnChanger}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handlerMarkAsPending={this.handlerMarkAsPending}
                    handlerMarkAsDone={this.handlerMarkAsDone}/>
            </div>
        )
    }
}