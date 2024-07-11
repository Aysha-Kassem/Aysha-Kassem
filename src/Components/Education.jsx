// Flowbite timeline
import { Timeline } from "flowbite-react";


// IMG
import HTML from "../assets/imgs/HTMLCSS.jpg";
import Javascript from "../assets/imgs/Javascript.jpg";
import Bootstrap from "../assets/imgs/Bootstrap.jpg";
import ReactJS from "../assets/imgs/ReactJS.jpg";

export default function Education() {
    return (
        <div className="grid gap-5 max-w-md">
            <h3 className="font-bold text-2xl text-zinc-900 dark:text-zinc-200">Education and Experience. <hr /></h3>
            <Timeline>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>Present 2020</Timeline.Time>
                        <Timeline.Title>University</Timeline.Title>
                        <Timeline.Body>
                            Copmuter Engneering at Pharos University in Alexandria (PUA), and The Royal Institute of Technology in Sweden (KTH).
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>September 2023 - January 2024</Timeline.Time>
                        <Timeline.Title>Course FrontEnd</Timeline.Title>
                        <Timeline.Body >
                            <div className="flex gap-16">
                                <h6>
                                    - September 2023 <br /> Successfully completed course HTML and CSS.
                                </h6>
                                <img src={HTML} alt="HTML CSS" className="size-2/12" />
                            </div>
                            <div className="flex gap-16">
                                <h6>
                                    - October 2023 <br /> Successfully completed course Javascript.
                                </h6>
                                <img src={Javascript} alt="HTML CSS" className="size-2/12" />
                            </div>
                            <div className="flex gap-16">
                                <h6>
                                    - November 2023 <br /> Successfully completed course Bootstrap.
                                </h6>
                                <img src={Bootstrap} alt="HTML CSS" className="size-2/12" />
                            </div>
                            <div className="flex gap-20">
                                <h6>
                                    - January 2024 <br /> Successfully completed course ReactJS.
                                </h6>
                                <img src={ReactJS} alt="HTML CSS" className="size-2/12" />
                            </div>
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                {/* <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                        <Timeline.Time>April 2022</Timeline.Time>
                        <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
                        <Timeline.Body>
                            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                        </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item> */}
            </Timeline>
        </div>
    )
}