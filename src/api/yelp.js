import axios from 'axios';

export default axios.create({
    baseURL: ' https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization : 'Bearer ubPq_mjvr55Db5AVc8j1TPoo2wIFO9Gxf8u3V_vMLmi2UbrOi1q0GZ-cQbihYY_a-wnjjwHQDRFYyo4c6T0Cwd1qCxVaa-v2wnBv6CK1p1sxdBr7xoq7GdmU4yGCX3Yx'
    }
});
