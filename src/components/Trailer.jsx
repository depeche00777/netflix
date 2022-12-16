//react-bootstrap modal을 이용한 유튜브 팝업
//https://www.npmjs.com/package/react-youtube -react-youtube라이브러리 설치

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from "react-youtube";

const Trailer = ({ item }) => {
	const [show, setShow] = useState(false);

	const opts = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
		},
	};

	const _onReady = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};

	return (
		<div>
			{console.log("받아온 item이 모야?? ", item)}
			<p className="trailer-btn" onClick={() => setShow(true)}>
				🎬 Watch Trailer
			</p>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				fullscreen={true}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<YouTube opts={opts} onReady={_onReady} />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Trailer;
