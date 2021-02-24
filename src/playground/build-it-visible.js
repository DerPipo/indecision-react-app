let detailsVisible = false 

const onToggleDetails = () => {
    detailsVisible = !detailsVisible
    render()
}

const appRoot = document.getElementById('app')

const render = () => {
    const template = (
        <div> {/* nur 1 root erlaubt */}
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleDetails}>
                {detailsVisible ? 'Hide details' : 'Show details' }
            </button>
            <p style={detailsVisible ? { display: '' } : { display: 'none' }}>Hey! These are some details you can now see</p>
            {/* alternativ */}
            {detailsVisible && (
                <p>Hey! These are some details you can now see</p>
            )
            }
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()