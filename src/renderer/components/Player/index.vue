<template>
	<div class="player">
		<section
			:class="'voi_container ' + 
				(upBoard.visible && 'up_show')"
			@click.middle="showBoard">
			<section class="voi_child_box">
				<div
					class="voi_child"
					id="voiUpBtn"
					@click="showUp">
					<div class="voi_child_content">
						<svg class="voi_song_list_svg" viewBox="0 0 1024 1024" width="25">
							<path class="voi_song_list_path" />
						</svg>
						<div class="voi_song_list_box" @click.stop>
							<div class="voi_song_list_relative">
								<div class="voi_song_cover_box">
									<div class="voi_song_cover_main">
										<img src="http://p1.music.126.net/uxCYDQ0TShRPlxLifK4WKQ==/562949953433262.jpg?param=130y130" ondragstart="return false" />
									</div>
								</div>
								<div class="voi_song_list_operate_box">
									<div class="voi_song_list_content_box">
										<div class="voi_song_list_song_info">
											<div class="voi_song_list_operate_author" :title="musicPlayer.songAuthor">{{musicPlayer.songAuthor || '暂无'}}</div>
											<div class="voi_song_list_operate_song_name" :title="musicPlayer.songName">{{musicPlayer.songName || '暂无'}}</div>
										</div>
										<div class="voi_song_list_btn_box">
											<div class="voi_volume">
												<svg viewBox="0 0 1024 1024" width="17">
													<path d="M843.225212 872.454971c-10.751505 0-19.455105-8.7036-19.455105-19.455105 0-6.143717 3.071859-11.775458 8.191623-15.359293l6.143717-6.655694c94.715643-90.619831 146.937241-211.446273 146.937241-341.488292 0-122.362371-46.589857-238.069049-131.577947-327.152951-4.095812-4.095812-6.655694-9.215576-6.655694-14.33534 0-10.751505 8.7036-19.455105 19.455105-19.455105 6.143717 0 12.287435 3.583835 15.87127 9.215576l6.655694 6.143717c87.035996 94.715643 135.161783 217.589991 135.161782 345.584103 0 139.769571-55.805433 270.323565-157.688746 368.111067 0-0.511976-16.895223 14.847317-23.03894 14.847317z m-114.682725-143.865382c-10.751505 0-19.455105-8.7036-19.455105-19.455105 0-5.631741 2.559882-11.263482 7.679647-14.847317l5.631741-7.679647c42.494045-51.709621 66.044962-116.73063 66.044962-183.799545 0-68.604844-24.062893-134.649806-68.604845-186.871404l0.511977-0.511977-5.631741-6.143717c-3.583835-3.583835-5.631741-8.191623-5.631741-13.311388 0-10.751505 8.7036-19.455105 19.455105-19.455105 8.191623 0 14.335341 4.095812 16.383246 7.167671l5.119765 7.16767c50.173692 59.389268 77.82042 134.13783 77.82042 211.95825s-27.646728 152.057005-77.308444 211.446273l-6.143717 6.143718c-4.607788 5.631741-10.239529 8.191623-15.87127 8.191623zM551.910612 1024c-27.134752 0-55.805433-13.311388-82.428208-38.91021l-225.269638-218.613944H110.074937C40.958116 766.475846 0 725.005754 0 654.86498V368.670145c0-70.65275 39.934163-111.610866 110.074937-111.610866h134.137829l225.269638-218.613943C506.344708 3.630937 548.838753-8.656498 583.653152 6.190819c36.862304 15.87127 58.365315 58.365315 58.365315 116.218654V901.125652c0 58.365315-20.991034 100.85936-58.365315 116.218654-10.751505 4.607788-20.991034 6.655694-31.74254 6.655694zM110.074937 308.256924c-40.958116 0-58.877292 17.919176-58.877292 60.413221v286.194835c0 40.958116 18.431152 60.413221 58.877292 60.413221h154.616887l240.116955 232.949285c21.503011 20.479058 43.006022 28.670681 58.365315 22.014987 16.895223-7.16767 27.134752-33.278469 27.134752-69.628797v-778.204203c0-35.838351-10.239529-61.94915-27.134752-69.11682-15.359293-6.655694-37.374281 1.535929-58.365315 22.014987L264.691824 308.256924H110.074937z"
													 p-id="6508" fill="#ffffff" />
												</svg>
											</div>
											<div class="voi_off_btn" @click="closeUp">
												<div class="voi_off_btn_line"></div>
												<div class="voi_off_btn_line" style="transform:rotate(-45deg)"></div>
											</div>
										</div>
									</div>
									<div class="voi_song_list_arg_deco"></div>
								</div>
							</div>
							<!-- voi_song_list_relative -->
						</div>
					</div>
				</div>
				<!-- 右边 -->
				<div class="voi_child" title="下一首">
					<div class="voi_arrow_right">
						<div class="voi_arrow_left_line"></div>
						<div class="voi_arrow_left_line"></div>
					</div>
					<div class="voi_child_content"></div>
				</div>
				<!-- 中下 -->
				<div class="voi_child" title="随机播放">
					<div class="voi_random_ico">
						<svg viewBox="0 0 1024 1024">
							<path d="M912 311.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2-2.8-2.8-4.2-6.2-4.2-10v-85.7H626.3c-14.3 0-27.2 2.3-38.9 6.7-11.6 4.5-21.9 11.2-30.8 20.1-8.9 8.9-16.5 18.1-22.7 27.4-6.3 9.4-13 20.9-20.1 34.6-9.5 18.5-21.1 43.9-34.8 76.3-8.6 19.6-16 36.2-22.1 49.6-6.1 13.4-14.2 29-24.1 46.9s-19.5 32.8-28.5 44.6c-9.1 11.9-20.1 24.2-33.1 37.1-13 12.8-26.4 23-40.2 30.6-13.8 7.6-29.7 13.8-47.5 18.8-17.8 4.9-36.9 7.3-57.2 7.3h-100c-4.1 0-7.6-1.3-10.2-4-2.7-2.6-4-6-4-10.1v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c14.3 0 27.2-2.3 38.9-6.7 11.6-4.5 21.9-11.2 30.8-20.1 8.9-8.9 16.5-18.1 22.7-27.4 6.3-9.4 13-20.9 20.1-34.6 9.5-18.4 21.1-43.9 34.8-76.3 8.6-19.6 16-36.2 22.1-49.6 6.1-13.4 14.2-29 24.1-46.9 10-17.8 19.5-32.8 28.5-44.6 9.1-11.9 20.1-24.2 33.1-37.1 13-12.8 26.4-23 40.2-30.6 13.8-7.6 29.7-13.8 47.5-18.8 17.8-4.9 36.9-7.3 57.2-7.3h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 301.9c2.7 2.4 4 5.9 4 10z m-502.7 43.3c-17.8 27.4-38.2 68-61.1 121.9-6.6-13.4-12-24.1-16.5-32.4-4.5-8.2-10.5-17.7-18.1-28.4-7.6-10.7-15.2-19.2-22.7-25.3-7.6-6.1-17-11.3-28.2-15.6-11.2-4.3-23.3-6.5-36.4-6.5h-99.9c-4.1 0-7.6-1.3-10.2-4-2.7-2.7-4-6.1-4-10.2V269c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4h100c74.2-0.1 135.3 33.4 182.9 100.4zM912 711.9c0 4.1-1.3 7.6-4 10.2l-142.9 143c-2.7 2.7-6.1 4-10.2 4-3.8 0-7.2-1.4-10-4.2s-4.2-6.2-4.2-10v-85.7c-9.5 0-22.2 0.1-37.9 0.2-15.8 0.2-27.8 0.3-36.2 0.5-8.4 0.2-19.2 0-32.6-0.5s-23.9-1.2-31.7-2.3c-7.7-1-17.3-2.6-28.5-4.7-11.3-2.1-20.7-4.8-28.2-8.3-7.4-3.4-16.1-7.7-25.9-12.8-9.9-5.1-18.6-11-26.4-17.8-7.7-6.9-16-14.8-24.6-23.8-8.6-9.1-17-19.4-25-31 17.6-27.7 37.8-68.3 60.8-121.9 6.6 13.4 12 24.2 16.5 32.4s10.5 17.7 18.1 28.4c7.6 10.7 15.2 19.2 22.7 25.3 7.6 6.1 17 11.4 28.2 15.6 11.2 4.3 23.3 6.5 36.4 6.5h114.3v-85.7c0-4.1 1.3-7.6 4-10.2 2.7-2.7 6.1-4 10.2-4 3.6 0 7.1 1.5 10.7 4.5L908 702c2.7 2.3 4 5.8 4 9.9z"
							 fill="#ffffff" />
						</svg>
					</div>
					<div class="voi_child_content"></div>
				</div>
				<!-- 左边 -->
				<div class="voi_child" title="上一首">
					<div class="voi_arrow_left">
						<div class="voi_arrow_left_line"></div>
						<div class="voi_arrow_left_line"></div>
					</div>
					<div class="voi_child_content"></div>
				</div>
			</section>
			<!-- voi_child_box -->
			<section class="voi_main_box">
				<div class="voi_main_svg_box">
					<svg viewBox="0 0 1024 1024" width="50px" class="loadSvg">
						<path class="play_svg voi_svg" v-show="!musicPlayer.vAudioIsReady" />
						<circle class="voi_svg" v-show="musicPlayer.vAudioIsReady" />
					</svg>
				</div>
				<div class="voi_main_content"></div>
			</section><!-- voi_main_box -->
		</section>
		<Board ref="Board"></Board>
	</div>
</template>

<script>
	import Board from "../Board";
	export default {
		name: 'Player',
		components: {
			Board
		},
		data() {
			return {
				win:null, // 当前窗口实例对象
				musicPlayer: {/* 音乐播放器操作 */
					songName: "",
					songSrc: "",
					songAuthor: "",
					vAudioIsReady: false,
				},
				upBoard:{
					visible:false,
				}, // 上方面板相关配置
			}
		},
		created() {
			
			
			// let win = require('electron').remote.getCurrentWindow();
		},
		mounted() {
			// 在当前页面中挂在 electron 实例
			this.win = require('electron').remote.getCurrentWindow();
			// this.win.setIgnoreMouseEvents(true, {forward: true}); // 允许当前窗口点击穿透
			// console.log(win.blur);
		},
		unmounted() { },
		methods: {
			// 鼠标中键播放器总体，显示快捷面板
			showBoard(event){
				this.$refs.Board.show();
			},
			// 关闭上方的方块
			closeUp(){
				console.log("close")
				this.upBoard.visible = false;
			},
			// 点击了上方的方块，显示上方的面板
			showUp(){
				console.log("test");
				this.upBoard.visible = true;
			},
		}
	}
</script>

<style lang="less">
	@import url(index.less);
</style>