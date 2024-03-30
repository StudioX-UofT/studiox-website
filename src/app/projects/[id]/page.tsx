import Image from "next/image";
import "@/app/projects/[id]/ProjectDetails.css";

type ProjectData = {
    id: string;
    name: string;
    date: string;
    description: string;
    images: Array<String>;
};

function getData(id: string) {
    // implement this when backend implemented

    return {
        id: 1,
        name: "VERNACULAR",
        date: "NOV 15, 11AM - 2PM",
        description:
            "in collaboration with @utmiec, we will be hosting an interactive workshop at tomorrows International Education Fair 💫 take a moment to distress and come paint tiles inspired by the Mexican pottery style, Talavera.",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
        ],
    };
}

export default function ProjectDetailsPage({
    params,
}: {
    params: { id: string };
}) {
    // replace line below with whatever function we need to get data
    const data = getData(params.id);

    return (
        <div className="projectDetails">
            <img
                className="projectDetails-bgImg"
                src={data.images[0]}
                alt="img1"
            />
            <div className="projectDetails-titleSection">
                <div className="projectDetails-title">
                    <h1>{data.name}</h1>
                    <h2>{data.date}</h2>
                    <h3>{data.description}</h3>
                </div>
            </div>
        </div>
    );
}
