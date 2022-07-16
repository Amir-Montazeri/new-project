import "./product.style.scss";
import PrimaryTextInput from "../../../components/primary_text_input/primary_text_input.component";
import { faBars, faClose, faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Fragment } from "react";
import React from "react";
import PrimarySelectInput from "../../../components/primary_select_input/primary_select_input.component";
import { checkNumber } from "../../../utils/NumbersHelper";
import plus from "../../../assets/Images/pkus.png";
import setting from "../../../global/setting.js";

const SaleRangeConponent = (props) => {
  const { ranges } = props;
  const onChange = (index, property, value) => {
    if (checkNumber(value) || property == "rangeSellType" || value == "") {
      props.onChange(index, property, value);
    }
  };
  return (
    <Container>
      <Row className="mt-3">
        <Col lg md xs sm>
          شروع
        </Col>
        <Col lg md xs sm>
          اتمام
        </Col>
        <Col className="xs-font-size-13" lg md xs sm>
          نوع قیمت گذاری
        </Col>
        <Col lg md xs sm>
          قیمت
        </Col>
        <Col lg md xs sm>
          عملیات
        </Col>
      </Row>
      {ranges
        ? ranges.map((r, index) => {
            return (
              <Row className="mt-3">
                <Col lg md xs sm>
                  <div className="form-input-border p-1">
                    <PrimaryTextInput
                      value={r.start}
                      onChange={(event) => {
                        onChange(index, "start", event.target.value);
                      }}
                    />
                  </div>
                </Col>
                <Col lg md xs sm>
                  <div className="form-input-border p-1">
                    <PrimaryTextInput
                      value={r.end}
                      onChange={(event) =>
                        onChange(index, "end", event.target.value)
                      }
                    />
                  </div>
                </Col>
                <Col className="p-0" lg md xs sm>
                  <PrimarySelectInput
                    value={r.rangeSellType}
                    onChange={(event) => {
                      onChange(index, "rangeSellType", event.target.value);
                    }}
                  >
                    <option value={"R"}>ریال</option>
                    <option value={"P"}>درصد</option>
                  </PrimarySelectInput>
                </Col>
                <Col lg md xs sm>
                  <div className="form-input-border p-1">
                    <PrimaryTextInput
                      value={r.price}
                      onChange={(event) =>
                        onChange(index, "price", event.target.value)
                      }
                    />
                  </div>
                </Col>
                {index > 0 ? (
                  <Col lg md xs sm onClick={() => props.onRemove(index)}>
                    <FontAwesomeIcon
                      icon={faClose}
                      className="exit-form-circle font-size-16"
                    />
                  </Col>
                ) : (
                  <Col lg md xs sm></Col>
                )}
              </Row>
            );
          })
        : null}
    </Container>
  );
};

const PropertyComponent = (props) => {
  const { properties } = props;
  const onChange = (index, property, value) => {
    props.onChange(index, property, value);
  };
  return (
    <Container>
      <Row className="mt-3">
        <Col lg md xs sm>
          نام مشخصه
        </Col>
        <Col lg md xs sm>
          مقدار
        </Col>
        <Col lg md xs sm>
          عملیات
        </Col>
      </Row>
      {properties
        ? properties.map((p, index) => {
            return (
              <Row className="mt-3">
                <Col lg md xs sm>
                  <div className="form-input-border p-1">
                    <PrimaryTextInput
                      value={p.key}
                      onChange={(event) =>
                        onChange(index, "key", event.target.value)
                      }
                    />
                  </div>
                </Col>
                <Col lg md xs sm>
                  <div className="form-input-border p-1">
                    <PrimaryTextInput
                      value={p.value}
                      onChange={(event) =>
                        onChange(index, "value", event.target.value)
                      }
                    />
                  </div>
                </Col>
                {index > 0 ? (
                  <Col lg md xs sm onClick={() => props.onRemove(index)}>
                    <FontAwesomeIcon
                      icon={faClose}
                      className="exit-form-circle font-size-16"
                    />
                  </Col>
                ) : (
                  <Col lg md xs sm></Col>
                )}
              </Row>
            );
          })
        : null}
    </Container>
  );
};

export default class CreateProduct extends React.Component {
  inputFile;
  constructor(props) {
    super(props);
    this.state = {
      product_type: "S",
      promotion_type: "R",
      categories: [],
      promotions: [],
      category: 0,
      typeOfSale: 1,
      ranges: [{ start: "", end: "", price: 0, rangeSellType: "R" }],
      price: null,
      name: "",
      properties: [{ key: "", value: "" }],
      images: [],
      typeOfDiscount: 1,
      open: false,
      calenderField: "",
      toDatePercent: "",
      fromDatePercent: "",
      toDateCode: "",
      fromDateCode: "",
      keyword: "",
      detail: "",
      promotionId: null,
    };
    this.inputFile = React.createRef();
  }

  componentDidMount() {
    fetch(`${setting.baseUrl}ProductCatagory/`, {
      method: "GET",
      headers:{"Content-Type":"application/json"}
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          categories: data.results,
        });
      });

    fetch(`${setting.baseUrl}Promotion/`, {
      method: "GET",
      headers:{"Content-Type":"application/json"}
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          promotions: data.results,
        });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onButtonClick = () => {
    this.inputFile.current.click();
  };
  handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const objectUrl = URL.createObjectURL(fileObj);
    let images = this.state.images;
    images.push({ file: objectUrl, path: fileObj });
    this.setState({ images });
  };
  managePopUpCalendar = (value, field = "") => {
    this.setState({
      open: value,
      calenderField: field,
    });
  };
  render() {
    return (
      <Fragment>
        <br />
        <br />

        <Container className="card">
          <h4>ایجاد محصول جدید</h4>
          <Row className="mt-4">
            <Col xs={12} sm={6} lg={4} md={4}>
              <div className="p-1 form-input-border">
                <FontAwesomeIcon className="form-input-icon" icon={faBars} />
                <PrimaryTextInput
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="نام محصول"
                />
              </div>

              <div className="mt-1">
                <PrimarySelectInput
                  placeholder="نوع محصول "
                  name="product_type"
                  value={this.state.product_type}
                  onChange={this.handleChange}
                >
                  <option value={""}></option>
                  <option value={"S"}>خدمات</option>
                  <option value={"P"}>محصول</option>
                </PrimarySelectInput>
              </div>
            </Col>
            <Col xs={12} sm={6} lg={4} md={4}>
              <div className="mt-1">
                <PrimarySelectInput
                  name="category"
                  onChange={this.handleChange}
                >
                  {this.state.categories.map((category, index) => (
                    <option value={category.id}>{category.name}</option>
                  ))}
                </PrimarySelectInput>
              </div>
              <div className="mt-1 p-1 form-input-border">
                <FontAwesomeIcon className="form-input-icon" icon={faBars} />
                <PrimaryTextInput
                  name="detail"
                  onChange={this.handleChange}
                  value={this.state.detail}
                  placeholder="جزئیات"
                />
              </div>
            </Col>
            <Col className="mt-1 p-2" xs={12} sm={6} lg={4} md={4}>
              <textarea
                onChange={this.handleChange}
                value={this.state.keyword}
                name="keyword"
                placeholder="کلمات کلیدی"
              ></textarea>
            </Col>
          </Row>
          <hr className="mt-3" />
          <Row>
            <h6>انتخاب تصویر</h6>
            <input
              type="file"
              id="file"
              ref={this.inputFile}
              style={{ display: "none" }}
              onChange={this.handleFileChange}
            />

            {this.state.images
              ? this.state.images.map((item, index) => {
                  return (
                    <Col lg={3} md={3} sm={6} xs={12}>
                      <div className="product-img mt-3">
                        <FontAwesomeIcon
                          icon={faClose}
                          className="exit-form-circle font-size-16"
                          onClick={()=>{
                            const images = this.state.images;
                            images.splice(index,1);
                            this.setState({
                              images
                            });
                          }}
                         />
                        <img src={item.file} />
                      </div>
                    </Col>
                  );
                })
              : null}
            {this.state.images.length <= 4 ? (
              <Col lg={3} md={3} sm={6} xs={12}>
                <div onClick={this.onButtonClick} className="product-img mt-3">
                  <img src={plus} />
                </div>
              </Col>
            ) : null}
          </Row>
          <hr className="mt-4" />
          <Row>
            <h6>نوع فروش</h6>
            <Col lg md sm xs>
              <PrimarySelectInput
                placeholder="واحد فروش"
                name="typeOfSale"
                onChange={this.handleChange}
              >
                <option value={1}>فروش</option>
                <option value={2}>بازه</option>
              </PrimarySelectInput>
            </Col>
          </Row>
          <Row>
            {this.state.typeOfSale == 1 ? (
              <Col lg xs sm md>
                <div className="form-input-border mt-3">
                  <FontAwesomeIcon className="form-input-icon" icon={faBars} />
                  <PrimaryTextInput
                    name="price"
                    value={this.state.price}
                    onChange={(event) => {
                      const value = event.target.value;
                      if (checkNumber(value) || value == "") {
                        this.handleChange(event);
                      }
                    }}
                    placeholder="قیمت"
                  />
                </div>
              </Col>
            ) : (
              <Fragment>
                <SaleRangeConponent
                  ranges={this.state.ranges}
                  onRemove={(index) => {
                    let ranges = this.state.ranges;
                    ranges.splice(index, 1);
                    this.setState({
                      ranges,
                    });
                  }}
                  onChange={(index, property, value) => {
                    let ranges = this.state.ranges;
                    let item = ranges[index];
                    item[property] = value;
                    ranges[index] = item;
                    this.setState({
                      ranges,
                    });
                  }}
                />
                <p
                  onClick={() => {
                    let ranges = this.state.ranges;
                    ranges.push({ start: "", end: "", price: 0 });
                    this.setState({
                      ranges,
                    });
                  }}
                >
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="circle-encouragement font-size-12 mt-1"
                  />
                </p>
              </Fragment>
            )}
          </Row>
          <hr className="mt-4" />
          <Row>
            <h6>مشخصات</h6>

            <PropertyComponent
              properties={this.state.properties}
              onRemove={(index) => {
                let properties = this.state.properties;
                properties.splice(index, 1);
                this.setState({
                  properties,
                });
              }}
              onChange={(index, property, value) => {
                let properties = this.state.properties;
                let item = properties[index];
                item[property] = value;
                properties[index] = item;
                this.setState({
                  properties,
                });
              }}
            />

            <p
              onClick={() => {
                let properties = this.state.properties;
                properties.push({ key: "", value: "" });
                this.setState({
                  properties,
                });
              }}
            >
              <FontAwesomeIcon
                icon={faAdd}
                className="circle-encouragement font-size-16 mt-1"
              />
            </p>
          </Row>
          <Row>
            <h6>تخفیف</h6>
            <Col lg md sm xs>
              <PrimarySelectInput
                placeholder="واحد فروش"
                name="promotionId"
                onChange={this.handleChange}
              >
                {this.state.promotions.map((promotion) => (
                  <option value={promotion.id}>
                    {promotion.from_date} {promotion.to_date}{" "}
                    {promotion.promotion_type == "P"
                      ? `${promotion.percent}%`
                      : `${promotion.mount} ریال`}
                  </option>
                ))}
              </PrimarySelectInput>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg md sm xs>
              <Button
                onClick={async () => {
                  let formData = new FormData();
                  formData.append("name", String(this.state.name));
                  formData.append(
                    "product_type",
                    String(this.state.product_type)
                  );
                  formData.append("detail", String(this.state.detail));
                  formData.append(
                    "product_sell_type",
                    this.state.typeOfSale == 1 ? "N" : "R"
                  );
                  formData.append("category", String(this.state.category));
                  formData.append("keyword", String(this.state.keyword));
                  if (this.state.typeOfSale == 1) {
                    formData.append("price", String(this.state.price));
                  } else {
                    if (this.state.ranges[0].start == "") {
                      alert("حداقل یک بازه قیمت گذاری الزامی هست");
                    }
                    this.state.ranges.forEach((range) => {
                      if (range.rangeSellType == "P" && range.price > 100) {
                        alert(
                          "نمیتوانید مقدار بیشتر از صد برای نوع قیمت گذاری درصدی انتخاب کنید."
                        );
                      }
                    });
                  }

                  for (
                    let index = 0;
                    index < this.state.images.length;
                    index++
                  ) {
                    const item = this.state.images[index];
                    formData.append(`image${index + 1}`, item.path);
                  }

                  fetch(`${setting.baseUrl}Product/`, {
                    method: "POST",
                    body: formData,
                    redirect: "follow",
                  }).then(async (res) => {
                    if (res.status == 201) {
                      const body = await res.json();
                      const productId = body.id;

                      if (this.state.promotionId != null) {
                        const requestBody_ = {
                          promotion_id: this.state.promotionId,
                          product_id: productId,
                        };

                        
                        fetch(`${setting.baseUrl}IntermediateTable/`, {
                          body: JSON.stringify(requestBody_),
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                        });
                      }

                      this.state.properties.forEach((property) => {
                        const requestBody = {
                          key: property.key,
                          value: property.value,
                          product_id: productId,
                        };

                        fetch(`${setting.baseUrl}ProductTechinfo/`, {
                          method: "POST",
                          body: JSON.stringify(requestBody),
                          headers: { "Content-Type": "application/json" },
                        });
                      });
                      if (this.state.typeOfSale != 1) {
                        this.state.ranges.forEach((range) => {
                          const requestBody = {
                            product_id: productId,
                            price: range.price,
                            from_amount: range.start,
                            to_amount: range.end,
                            range_sell_type: range.rangeSellType,
                          };

                          fetch(`${setting.baseUrl}SellOptions/`, {
                            body: JSON.stringify(requestBody),
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                          });
                        });
                      }
                      setTimeout(()=>{
                        alert("عملیات موفقیت آمیز بود");
                      },3000);
                    }
                  });
                }}
              >
                ثبت محصول
              </Button>
            </Col>
          </Row>
        </Container>
        
      </Fragment>
    );
  }
}
