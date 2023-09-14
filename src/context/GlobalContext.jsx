import { createContext, useRef } from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import noImg from "../assets/no-image.svg";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  // Job Slider
  const [data, setData] = useState([]);
  const [id, setId] = useState(-1);
  const navigate = useNavigate();
  const [isValid, setValid] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        setData(res.data.data);
        setValid(false);
      });
  }, [isValid, setValid]);

  const getTime = (item) => {
    const string = item.substring(12, 13);
    return string + " hours ago";
  };

  const getMoney = (itemMin, itemMax) => {
    const min = parseFloat(itemMin);
    const max = parseFloat(itemMax);
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    if (min <= 1000 && max <= 1000) {
      return (
        formatter.format(min / 1000) +
        " - " +
        formatter.format(max / 1000) +
        " ribu"
      );
    } else if (min <= 10000 && max <= 10000 && max < 100000) {
      return (
        formatter.format(min / 1000) +
        " ribu - " +
        formatter.format(max / 1000) +
        " ribu"
      );
    } else if (min <= 100000 && max <= 100000 && max < 1000000) {
      return (
        formatter.format(min / 1000) +
        " ribu - " +
        formatter.format(max / 1000) +
        " ribu"
      );
    } else if (min <= 1000000 && max <= 1000000 && max < 10000000) {
      return (
        formatter.format(min / 1000000) +
        " juta - " +
        formatter.format(max / 1000000) +
        " juta"
      );
    } else if (min <= 10000000 && max <= 10000000 && max < 100000000) {
      return (
        formatter.format(min / 1000000) +
        " juta - " +
        formatter.format(max / 1000000) +
        " juta"
      );
    } else if (min <= 100000000 && max <= 100000000) {
      return (
        formatter.format(min / 1000000) +
        " juta - " +
        formatter.format(max / 1000000) +
        " juta"
      );
    } else {
      return "Harga tidak valid";
    }
  };

  const handleEdit = (id) => {
    setId(parseInt(id));
    navigate(`/dashboard/list-job-vacancy/${id}`);
  };

  const handleDelete = (id) => {
    const nameUser = data
      .filter((user) => user.id === id)
      .map((user) => user.title);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "Are you sure?",
      html: `Yakin <b>${nameUser[0]} </b> akan dihapus`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2463EB",
      cancelButtonColor: "#1d263a",
      confirmButtonText: "Tolong Hapus!",
      backdrop: `rgba(31,40,60,.7)`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        axios
          .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          })
          .then((res) => {
            setValid(true);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const handleButtonClickRight = () => {
    const container = document.querySelector(".cards-container");
    container.scrollBy({ left: 260, behavior: "smooth" }); // Use scrollBy with behavior set to 'smooth'
  };
  const handleButtonClickLeft = () => {
    const container = document.querySelector(".cards-container");
    container.scrollBy({ left: -260, behavior: "smooth" }); // Use scrollBy with behavior set to 'smooth'
  };

  const refs = {
    about: useRef(null),
    job: useRef(null),
    testi: useRef(null),
  };

  const scrollToRef = (e) => {
    refs[e.target.id].current.scrollIntoView({ behavior: "smooth" });
  };

  // NAVIGASI

  const [nav, setNav] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setScrollBackground(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [dataFilter, setDataFilter] = useState([]);
  const [click, setClick] = useState(false);
  const [openHiringChecked, setOpenHiringChecked] = useState(false);
  const [closeHiringChecked, setCloseHiringChecked] = useState(false);
  const [searchValue, setSearchValue] = useState({
    title: "",
    company_city: "",
    salary_min: "",
  });

  const handleSearchChange = (e) => {
    setSearchValue({
      ...searchValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearAllClick = () => {
    setOpenHiringChecked(false);
    setCloseHiringChecked(false);
    setDataFilter(data);
  };

  useEffect(() => {
    setDataFilter(data);
  }, [data, setDataFilter]);

  const handleSearch = () => {
    const { title, company_city, salary_min } = searchValue;

    const filterData = data.filter((item) => {
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseSalaryMin = item.salary_min.toString().toLowerCase();
      const lowerCaseCompanyCity = item.company_city.toLowerCase();

      if (title && !lowerCaseTitle.includes(title.toLowerCase())) {
        return false;
      }

      if (
        salary_min &&
        !lowerCaseSalaryMin.includes(salary_min.toLowerCase())
      ) {
        return false;
      }

      if (
        company_city &&
        !lowerCaseCompanyCity.includes(company_city.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    setDataFilter(filterData);
  };

  const handleReset = () => {
    setSearchValue({
      title: "",
      company_city: "",
      salary_min: "",
    });
    setDataFilter(data);
  };

  const handleFilterClick = (e) => {
    setClick(!click);
    const event = e.target.id;
    if (click) {
      let filterData = "";
      switch (event) {
        case "openHiring":
          filterData = data.filter((item) => item.job_status === 1);
          setClick(!click);
          setOpenHiringChecked(!openHiringChecked);
          return setDataFilter(filterData);

        case "closeHiring":
          filterData = data.filter((item) => item.job_status === 0);
          setClick(!click);
          setCloseHiringChecked(!closeHiringChecked);
          return setDataFilter(filterData);

        default:
      }
    } else {
      setDataFilter(data);
      setOpenHiringChecked(false);
      setCloseHiringChecked(false);
    }
  };

  const handleDetailJob = (id) => {
    setId(parseInt(id));
    navigate(`dashboard/${id}`);
  };

  const handleSalary = () => {
    const maxSalary = [...dataFilter].sort(
      (a, b) => a.salary_min - b.salary_min
    );
    setDataFilter(maxSalary);
  };

  const handleOpenHiringSort = () => {
    const filterData = dataFilter.filter((item) => item.job_status === 1);
    setDataFilter(filterData);
  };

  const handleMinSalary = () => {
    const minSalary = [...dataFilter].sort(
      (a, b) => b.salary_min - a.salary_min
    );
    setDataFilter(minSalary);
  };

  const [input, setInput] = useState({
    email: "",
    name: "",
    image_url: "",
    password: "",
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(input);
    let { name, image_url, email, password } = input;

    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        confirmButtonColor: "#2463EB",
        text: "Password must be at least 8 characters long.",
      });
      return;
    } else {
      axios
        .post("https://dev-example.sanbercloud.com/api/register", {
          name: name,
          image_url: image_url,
          email: email,
          password: password,
        })
        .then((res) => {
          let data = res.data;
          Cookies.set("token", data.token, { expires: 1 });
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Register in successfully",
          });
          navigate("/dashboard/login");
          setInput({
            email: "",
            name: "",
            image_url: "",
            password: "",
          });
        })
        .catch((err) => {
          const error = err.response.data;
          if (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "The email has already been taken.",
              confirmButtonColor: "#2463EB",
            });
          }
        });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (input.password.length >= 8) {
      let { email, password } = input;
      axios
        .post("https://dev-example.sanbercloud.com/api/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          let data = res.data;
          Cookies.set("token", data.token, { expires: 1 });
          Cookies.set("user", JSON.stringify(data.user), { expires: 1 });
          navigate("/dashboard");
          setInput({
            email: "",
            name: "",
            image_url: "",
            password: "",
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Error Login",
            text: "Pastikan Email & Password di isi dengan benar",
            confirmButtonColor: "#2463EB",
          });
        });
    } else {
      setPasswordMatch(!passwordMatch);
      return;
    }
  };

  const handleChangePassword = (event) => {
    event.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;

    if (input.new_password === input.new_confirm_password) {
      axios
        .post("https://dev-example.sanbercloud.com/api/change-password", {
          current_password,
          new_password,
          new_confirm_password,
        })
        .then((res) => {
          let data = res.data;
          Cookies.set("token", data.token, { expires: 1 });
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Password Change is successfully",
          });
          navigate("/dashboard");
          setInput({
            email: "",
            name: "",
            image_url: "",
            password: "",
            current_password: "",
            new_password: "",
            new_confirm_password: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPasswordMatch(!passwordMatch);
      return;
    }
  };

  const [inputJob, setInputJob] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "open",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });
  const [imagePreview, setImagePreview] = useState(noImg);

  const handleImageChange = (e) => {
    const url = e.target.value;
    setInputJob({
      ...inputJob,
      company_image_url: url,
    });
    setImagePreview(url || noImg);
  };

  const handleChangeJob = (e) => {
    setInputJob({
      ...inputJob,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeJobStatus = (e) => {
    const value = e.target.value;
    setInputJob({
      ...inputJob,
      job_status: parseInt(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      job_description,
      job_qualification,
      job_type,
      job_tenure,
      job_status,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
    } = inputJob;
    if (id === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        )
        .then(() => {
          setValid(!isValid);
          navigate("/dashboard");
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`,
          {
            title,
            job_description,
            job_qualification,
            job_type,
            job_tenure,
            job_status,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
          },
          {
            headers: { Authorization: "Bearer " + Cookies.get("token") },
          }
        )
        .then(() => {
          setValid(!isValid);
          navigate("/dashboard/list-job-vacancy");
        });
    }
    setInputJob({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: "",
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
  };

  const state = {
    data,
    setData,
    getTime,
    getMoney,
    handleButtonClickRight,
    handleButtonClickLeft,
    refs,
    scrollToRef,
    nav,
    setNav,
    scrollBackground,
    setScrollBackground,
    handleNav,
    dataFilter,
    setDataFilter,
    openHiringChecked,
    setCloseHiringChecked,
    closeHiringChecked,
    handleSearch,
    searchValue,
    handleSearchChange,
    handleClearAllClick,
    handleReset,
    handleFilterClick,
    click,
    id,
    setId,
    handleDetailJob,
    handleSalary,
    handleOpenHiringSort,
    handleMinSalary,
    input,
    setInput,
    handleChange,
    handleRegister,
    navigate,
    handleLogin,
    handleDelete,
    passwordMatch,
    handleChangePassword,
    setPasswordMatch,
    setValid,
    isValid,
    imagePreview,
    handleImageChange,
    handleChangeJob,
    handleChangeJobStatus,
    handleSubmit,
    inputJob,
    setInputJob,
    handleEdit,
    setImagePreview,
  };

  return (
    <GlobalContext.Provider value={{ state }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
