import React, { useState } from 'react';
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import Editor from '@draft-js-plugins/editor';

export default function EditorComponent(){

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const onChange = (newEditorState: EditorState) => {
        console.log("🚀 ~ onChange ~ newEditorState:", newEditorState);
        setEditorState(newEditorState);
    };

    const toggleBlockType = (blockType: string) => {
        setEditorState(RichUtils.toggleBlockType(editorState, blockType));
    };


 

    return (
        <div style={{ padding: 3 }}>
            <button onClick={() => toggleBlockType('header-one')}>H1</button>
            <div style={{ background: 'red', padding: 3 }}>
                <Editor editorState={editorState} onChange={onChange} />
            </div>
        </div>
    );
};