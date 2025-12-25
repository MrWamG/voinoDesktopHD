const state = {
    list: {}, // 歌单列表（歌曲列表存在于歌单中，歌单和歌曲都以 id 为 key）
}

const mutations = {
    // 更新歌单
    SET_LIST(state, list) {
        state.list = list;
    },
    // 更新某个歌单
    UPDATE_LIST(state, target){
        const songs = state[target.id] ? state[target.id].songs : {};
        target.songs.forEach(song=>{
            songs[song.id] = song;
        })
        state[target.id] = {
            ...state[target.id],
            songs,
        };
    }
}

const actions = {
    // 更新整个歌单对象
    setList({ commit }, list) {
        commit('SET_LIST', list);
    },
    // 更新某个歌单
    updateList({ commit }, target){
        commit('UPDATE_LIST', target);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
