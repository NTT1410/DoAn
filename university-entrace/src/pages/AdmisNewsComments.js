import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Apis, { authApi, endpoints } from "../configs/Apis";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import MySpinner from "../components/MySpinner";
import Moment from "react-moment";
import { MyUserContext } from "../App";

const AdmisNewsComments = () => {

    const [user,] = useContext(MyUserContext);

    const { admissionId } = useParams();
    const { newsId } = useParams();

    const [comments, setComments] = useState(null);
    const [news, setNews] =  useState(null);
    const [contentComment, setContentComment] = useState();


    useEffect(() => {
        const loadNews = async () => {
            let { data } = await Apis.get(endpoints['newsDetails'](newsId));
            
                console.info(data);
            setNews(data); 
        }
        
        // const loadComments = async () => {
        //     let {data} = await Apis.get(endpoints['listComments'](newsId));
            
        //     console.info(data);
        //     setComments(data);
        // }
        
        loadNews();
        // loadComments();

    }, []);

    // const addComment = () => {
    //     const process = async () => {
    //         let { data } = await authApi().post(endpoints['add-comment'], {
    //             "content": contentComment,
    //             "news": news.id
    //         });

    //         setComments([...comments, data]);
    //     }

    //     process();
    // }

    // if (news === null || comments === null)
    //     return <MySpinner />;

    let url = `/Login?next=/admissions/${admissionId}/news/${newsId}`; //quay lai trang hienj tai

    return <>
        <h1>admissions {admissionId} news {newsId}</h1>
        hien thi thong tin chi tiet news va nhung binh luan cua no
        <h1 className="text-center text-info mt-2">CHI TIẾT SẢN PHẨM ({newsId})</h1>
        <Row>
            <Col md={5} xs={6}>
                <h2 className="text-danger">{news.title}</h2>
                <p>{news.content}</p>  
            </Col>
        </Row>
        <hr />


{/* 
        {user === null ? <p>Vui lòng <Link to={url}>đăng nhập</Link> để bình luận! </p> : <>
            <Form.Control as="textarea" aria-label="With textarea" value={contentComment} onChange={e => setContentComment(e.target.value)} placeholder="Nội dung bình luận" />
            <Button onClick={addComment} className="mt-2" variant="info">Bình luận</Button>
        </>}
        <hr />


        <ListGroup>
            {comments.map(c => <ListGroup.Item id={c.id}>
                {c.userId.lastName} {c.userId.firstName}- {c.content} - <Moment locale="vi" fromNow>{c.createdDate}</Moment>
            </ListGroup.Item>)
            }
        </ListGroup> */}



    </>

}

export default AdmisNewsComments;