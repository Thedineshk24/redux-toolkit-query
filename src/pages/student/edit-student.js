import { useState, useEffect } from "react";
import { Input, Row, Col, Button, Card } from "antd";
import { useUpdateStudentMutation, useGetStudentsByIdQuery } from "../../services/students";
const EditStudent = ({ history, match }) => {
  const [updateStudent, status] = useUpdateStudentMutation();
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const {data: DATA, isLoading} = useGetStudentsByIdQuery(match.params.id);

  useEffect(() => {
    setData(DATA)
  },[]);


  if(isLoading){
    return <p>loading ...</p>
  }

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    // after submit data
    setData({
      fullName: "",
      phone: "",
      email: "",
    });

    updateStudent(data)

    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card title="Edit a new student">
        <Row gutter={[0, 20]}>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student Full Name"
              name="fullName"
              value={data?.fullName}
              onChange={handleChange}
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student Phone Number"
              name="phone"
              value={data?.phone}
              onChange={handleChange}
            />
          </Col>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Enter Student E-mail address"
              name="email"
              value={data?.email}
              onChange={handleChange}
            />
          </Col>
          <Col span={24}>
            <Button htmlType="submit" type="primary">
              Update Student
            </Button>
          </Col>
        </Row>
      </Card>
    </form>
  );
};

export default EditStudent;
