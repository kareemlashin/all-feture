    /*
     *counter up
     */
    let count_num = $(".count").attr("count-num");
    let count_default = $(".count").text();
    let count_num_convert = parseInt(count_num);
    let increase = () => {
        if (count_default < count_num_convert) {
            count_default++;
            $(".count").text(count_default);
        } else {
            clearInterval(increase);
        }
    }
    setInterval(increase, 50);