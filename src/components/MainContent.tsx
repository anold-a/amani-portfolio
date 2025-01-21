import "../styles/content.css"
const MainContent = () => {
    return (
        <main>
            <div className="content">
             <div>
             <img  src="/study.jpg" width={50} alt="study"/>
                </div>
                
            <div>
                    <h1>2025 Goals/Objectives</h1>
                   
            <ul>
                <li>Create 2/3 hours a day to learn a concept</li>
                <li>Build projects on weekends</li>
                <li>Participate on an open source code challenge</li>
                <li>Reduce phone time</li>
                </ul>
                </div>

                </div>
        </main>
    )
}
export default MainContent;