import React from "react";
import { Row, Col, Card, Image, Descriptions } from "antd";
import { useGetStudentsByIdQuery } from "../../services/students";

const Student = ({ match }) => {
  const { isLoading, isError, data } = useGetStudentsByIdQuery(match.params.id);
  if (isLoading) {
    return <p>loading ...</p>;
  }

  if (isError) {
    return (
      <p
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          marginTop: "50vh",
        }}
      >
        something went wrong!
      </p>
    );
  }

  return (
    <div>
      <Card title="View Student Detials">
              <Row gutter={[0, 20]}>
                <Col span={8}>
                  <Image width={200} src={`https://i.pravatar.cc/1920?img=${data.id}`} />
                </Col>
                <Col span={16}>
                  <Descriptions title="Subroto Biswas " layout="vertical">
                    <Descriptions.Item label="Full Name">
                      {data.name}
                    </Descriptions.Item>
                    <Descriptions.Item label="Phone Number">
                     {data.phone}
                    </Descriptions.Item>
                    <Descriptions.Item label="E-mail Address">
                      {data.email}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
      </Card>
    </div>
  );
};

export default Student;
