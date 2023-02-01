import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SERVER } from './variables/Variables';
import Message from './Message';
import Loader from './Loader';

const Form = () => {
  const [axiosResponse, setAxiosResponse] = useState('');
  const [message, setMessage] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`${SERVER}/url-checker/${url}`, config);
      console.log(data?.message);
      console.log(data);
      setAxiosResponse(data);
      setMessage(data?.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(
        error?.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.response?.data
          ? error?.response?.data
          : error?.message
      );
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setMessage('');
    }, 5000);

    return () => clearTimeout(time);
  }, [axiosResponse, message]);

  useEffect(() => {
    const error = setTimeout(() => {
      setError('');
    }, 5000);

    return () => clearTimeout(error);
  }, [axiosResponse, error]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setAxiosResponse('');
    }, 50000);

    return () => clearTimeout(interval);
  }, [axiosResponse]);

  return (
    <div className="container">
      <h2>Secure Url Checker</h2>
      <p>
        Url checker is a simple but complex app that checks whether a given url
        is secured or not. It accepts all forms of url format. For example, you
        can type nairaland.com, vercel.com, and so on, and it will first check
        whether the url is secured before giving the user the go ahead order to
        navigate to the url.
      </p>
      <p className="italics-paragraph">
        You can give that a try; it's totally free!!!
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          {loading ? <Loader size={50} spin /> : null}
          {error ? <Message variant="danger">{error}</Message> : null}
          {message ? <Message variant="success">{message}</Message> : null}
          <label htmlFor="url">Url checker</label>
          {axiosResponse ? (
            <div className="link-response-div">
              <a
                href={axiosResponse?.newUrl}
                target="_blank"
                rel="noreferrer"
                className="axios-anchor-link"
              >
                {axiosResponse?.newUrl} <span>click</span>
              </a>
            </div>
          ) : null}

          <div>
            <input
              type="text"
              id="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="eg  clik.com "
            />
          </div>
        </div>

        <button type="submit" className="form-btn">
          Check url
        </button>
      </form>
    </div>
  );
};

export default Form;
