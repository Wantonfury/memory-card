import React, { useState } from "react";

const useGenerateCards = () => {
    const path = require.context('../assets/img/cards', false, /\.svg$/);
    return path.keys().map(path);
}

export default useGenerateCards;