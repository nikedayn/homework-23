import s from "./NoteItem.module.scss";
let themeClass;

const NoteItem = (props) => {
    switch (props.theme) {
        case 'black':
            themeClass = s.black_theme_for_note;
            break;

        case 'white':
            themeClass = s.white_theme_for_note;
            break;
        
        case 'darkslategray':
            themeClass = s.darkslategray_theme_for_note;
            break;

        case 'lightyellow':
            themeClass = s.lightyellow_theme_for_note;
            break;

        default:
            themeClass = '';
    } 

    const hEditBtn = (hInput) => {
        if (props.hOnEdit) {
            return(
                <div className={s.headline_and_edit}>
                    <input onChange={(e)=>{
                        hInput = e.target.value;
                        }} type="text" className={s.input}/>
                    <button onClick={()=>{props.editHeadline(props.id, props.hOnEdit, hInput)}} className={s.edit_btn}>save</button>
                </div>
            )
        }
        else if (!props.hOnEdit) {
            return(
                <div className={s.headline_and_edit}>
                    <h2 className={s.note_headline}>{props.title}</h2>
                    <button onClick={()=>{props.editHeadline(props.id, props.hOnEdit, hInput)}} className={s.edit_btn}>edit</button>
                </div>
            )
        }
    }

    const pEditBtn = (pInput, editParagraph) => {
        if (props.pOnEdit) {
            return(
                <div className={s.paragraph_and_edit}>
                    <textarea onChange={(e)=>{
                        pInput = e.target.value;
                        }} name="" className={s.textarea} cols="30" rows="10"></textarea>
                    <button onClick={()=>{props.editParagraph(props.id, props.pOnEdit, pInput)}} className={s.edit_btn}>save</button>
                </div>
            )
        }
        else if (!props.pOnEdit) {
            return(
                <div className={s.paragraph_and_edit}>
                    <p className={s.note_content}>{props.text}</p>
                    <button onClick={()=>{props.editParagraph(props.id, props.pOnEdit, pInput)}} className={s.edit_btn}>edit</button>
                </div>
            )
        }
    }

    return(
        <li className={`${s.notes_list_item} ${themeClass}`}>
            {hEditBtn(props.hInput)}
            <article className={s.note_and_time}>
                {pEditBtn(props.pInput, props.editParagraph)}
                <p className={s.time_were_note_was_created}>
                    {props.time}
                </p>
            </article>
            <button onClick={()=>{props.deleteNote(props.id)}} className={s.delete_btn}>Delete</button>
        </li>
    )
};

export default NoteItem;