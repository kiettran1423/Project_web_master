import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'

type Props = {
    videoUrl: string;
    title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
    const [videoData, setVideoData] = useState({
        otp: "",
        playbackInfo: "",
    });

    useEffect(() => {
        axios.post("http://localhost:8000/api/v1/getVdoCipherOTP", {
            videoId: videoUrl,
        }).then((res) => {
            setVideoData(res.data);
        })
    }, [videoUrl]);

    return (
        <div style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}>
            {videoData.otp && videoData.playbackInfo !== "" && (
                <iframe
                    src={`https://player.vdocipher.com/v2/?otp=20160313versASE323dEzAtV7wOaANhpw9itR0vDBLe63Q7JMFskBo68TH8blwEU&playbackInfo=eyJ2aWRlb0lkIjoiN2RlMDk2NDhjMDRkN2QyMDczNzRjNzNjZWMyOTg5ZjUifQ==&player=TF1Rqx28OCOAju9Q`}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0
                    }}
                    allowFullScreen={true}
                    allow="encrypted-media"
                ></iframe>
            )}
        </div>
    )
}

export default CoursePlayer