
import AppliesToYou from "src/components/profile-page/applies-to-you";
import ComfortableWith from "src/components/profile-page/confortable-with";
import Education from "src/components/profile-page/education"
import Skills from "src/components/profile-page/skills"

const Container = () => {

    return (
        <main>
            <form className="px-5 py-12">
                <Education />
                <AppliesToYou />
                <Skills />
                <ComfortableWith />
            </form>
        </main>
    )
};

export default Container;