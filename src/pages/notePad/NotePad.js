import React, { Component } from 'react'

export class NotePad extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAdd: false,
            title: '',
            description: '',
            notes: [],
        }
        this.toggleAdd = this.toggleAdd.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.createNote = this.createNote.bind(this)
    }

    toggleAdd() {
        this.setState({ showAdd: true })
    }

    onTitleChange(event) {
        this.setState({ title: event.target.value })
    }

    createNote() {
        // this.setState([...this.state.notes, { title: this.state.title }])
        this.state.notes.push({ title: this.state.title })
        console.log(this.state.notes)

    }

    renderNotes() {
        if (this.state.notes.length !== 0) {
            return this.state.notes.map((item, index) => {
                return (<li>{item?.title}</li>)
            })
        }
    }

    render() {
        return (
            <>
                <section>
                    {!this.state.showAdd &&
                        <button onClick={this.toggleAdd}>Add</button>}
                    {this.state.showAdd &&
                        <>
                            <input name='title' onChange={this.onTitleChange} value={this.state.title} />
                            <textarea name='description'></textarea>
                            <button onClick={this.createNote}>Save</button>
                        </>
                    }
                    {this.renderNotes()}
                </section>
            </>
        )
    }
}

export default NotePad