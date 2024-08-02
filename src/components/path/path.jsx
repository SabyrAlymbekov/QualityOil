import '@components/path/path.sass'

export default function Path({ path }) {
        let newEls = []
        for (let i = 0; i < path.length; i++) {
            newEls.push(<li className="path__element1" key={i}>{path[i]}</li>)
            if (i !== path.length - 1) {
                newEls.push(<li className="path__element2" key={i + path.length}>/</li>)
            }
        }
    return <ul className="path">
        {
            newEls
        }
    </ul>
}