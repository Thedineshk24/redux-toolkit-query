import { Row, Col, Card, Typography } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import {
  useGetStudentsQuery,
  useDeleteStudentMutation,
} from "../../services/students";
import { Spin } from "antd";
const { Title, Paragraph } = Typography;

const Students = () => {
  let history = useHistory();
  const { data, isLoading, isSuccess, isError } = useGetStudentsQuery();
  const [deleteById,status] = useDeleteStudentMutation();

  if (isLoading) {
    return (
      <center>
        <Spin />
      </center>
    );
  }

  if (isError) {
    return <p style={{ color: "red" }}>something went wrong!</p>;
  }

  return (
    <Row gutter={[20, 20]}>
      {isSuccess &&
        data.map((item) => (
          <Col span={6} key={item.id}>
            <Card
              hoverable={true}
              bordered={false}
              cover={
                <img alt="example" src={`https://i.pravatar.cc/${item.id}`} />
              }
              actions={[
                <EyeOutlined
                  key="view"
                  onClick={() => history.push(`/students/${item.id}`)}
                />,
                <EditOutlined
                  key="edit"
                  onClick={() => history.push(`/students/edit/${item.id}`)}
                />,
                <DeleteOutlined
                  key="setting"
                  onClick={() => deleteById(item.id)}
                />,
              ]}
            >
              <div className="student-info">
                <Title level={5}>{item.name}</Title>
                <Paragraph>{item.email}</Paragraph>
                <Paragraph>{item.phone}</Paragraph>
              </div>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Students;
