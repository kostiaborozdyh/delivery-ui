import $ from "jquery";
import {getPageCount} from "../utils/pages";

export default class DirectionsInfoService {
    static getDirections(cityFrom, cityTo, setDirections, setTotalPages, limitOnPage) {
        const requestData = {
            cityFrom: cityFrom,
            cityTo: cityTo
        }
        const requestJson = JSON.stringify(requestData)
        $.post({
            contentType: 'application/json',
            url: 'http://localhost:8081/v1/getInfo',
            data: requestJson,
            success: function (data) {
                setDirections(data)
                setTotalPages(getPageCount(data.length, limitOnPage))
            },
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }
        });
    }
}