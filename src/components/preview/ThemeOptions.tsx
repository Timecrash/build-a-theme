import React, { ChangeEvent, useContext } from "react";
import { ThemeContext } from "../../App";
import { Disclaimer } from "../Disclaimer";

const ThemeOptions = () => {

    const { setSidebar, setNavLocation, sidebar, header, footer, setTitleLocation, setDescriptionLocation, setLayout } = useContext(ThemeContext)

    function changeLocation(event: ChangeEvent<HTMLSelectElement>, type: string) {
        if (type === 'title') {
            setTitleLocation(event.target.value)
        }
        if (type === 'nav') {
            setNavLocation(event.target.value)
        }

        else if (type === 'layout') {
            if (setLayout != null)
                setLayout(event.target.value)
        }
        else {
            setDescriptionLocation(event.target.value)

        }
    }

    function addSidebar() {
        setSidebar(!sidebar)
    }
    return (
        <div className='forms'>
            <h3>Theme Options</h3>
            <label htmlFor='postStyle'>Post layout</label>
            <select name='layout' id="layout" onChange={(event) => changeLocation(event, 'layout')}>
                <option value="default">Default</option>
                <option value="contained">Contained</option>
                <option value="grid">Grid</option>
            </select>
            <label htmlFor='backgroundColor'>Title Location</label>
            {!footer && !header && !sidebar ? <Disclaimer icon="fas fa-exclamation-triangle" words="please enable a sidebar, header, or footer" />
                :
                <select name="title" id="title" onChange={(event) => changeLocation(event, 'title')}>
                    <option>Select a location for your title</option>
                    {sidebar && <option value="sidebar">Sidebar</option>}
                    {header && <option value="header">Header</option>}
                    {footer && <option value="footer">Footer</option>}        </select>
            }
            <label htmlFor='backgroundColor'>Description Location</label>

            {!footer && !header && !sidebar ? <Disclaimer icon="fas fa-exclamation-triangle" words="please enable a sidebar, header, or footer" />
                :
                <select name="description" id="description" onChange={(event) => changeLocation(event, 'description')}>
                    <option>Select a location for your Description</option>
                    {sidebar && <option value="sidebar">Sidebar</option>}
                    {header && <option value="header">Header</option>}
                    {footer && <option value="footer">Footer</option>}        
                </select>
            }
            <label htmlFor='navLocation'>Navigation Location</label>
            {!footer && !header && !sidebar ? <Disclaimer icon="fas fa-exclamation-triangle" words="please enable a sidebar, header, or footer" />
                :
                <select name="title" id="title" onChange={(event) => changeLocation(event, 'nav')}>
                    <option>Select a location for your main navigation</option>
                    {sidebar && <option value="sidebar">Sidebar</option>}
                    {header && <option value="header">Header</option>}
                    {footer && <option value="footer">Footer</option>}        </select>
            }
            <div className='like-reblog-options'>
                <div className="flex">
                    <label className='half'>Sidebar</label>
                    <button className={`toggle-button toggle-${sidebar}`} onClick={addSidebar}>Toggle Sidebar</button>
                </div>
            </div>
        </div>
    )
}

export { ThemeOptions }