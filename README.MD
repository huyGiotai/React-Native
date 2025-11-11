Ứng dụng Đặt đồ ăn (DuBai Food) - React Native/Expo
Đây là dự án cá nhân xây dựng một ứng dụng đặt đồ ăn hoàn chỉnh, sử dụng React Native (Expo) và TypeScript. Dự án mô phỏng các chức năng của một ứng dụng thương mại điện tử (lấy ý tưởng từ Shopee - Food) đồ ăn thực tế, tập trung vào việc xử lý UI/UX phức tạp và quản lý trạng thái phía client (Frontend).

🚀 Các tính năng chính 
Điều hướng (Routing): Xây dựng hệ thống điều hướng lồng (nested navigation) bằng Expo Router (bao gồm Tabs, Stack, Modal,...)

Quản lý trạng thái (State Management): Sử dụng React Context API để quản lý trạng thái toàn cục của ứng dụng (thông tin người dùng, giỏ hàng).

Xử lý API: Tích hợp REST API bằng Axios, cấu hình Interceptors để tự động đính kèm access_token (lấy từ AsyncStorage) cho các yêu cầu cần xác thực.

Quản lý Form & Validation: Sử dụng Formik và Yup để quản lý trạng thái form và xác thực dữ liệu đầu vào (Đăng nhập, Đăng ký, Đổi mật khẩu...).

Giao diện & Hoạt ảnh (UI/UX):

Sử dụng React Native Reanimated cho các hiệu ứng phức tạp như Parallax Header và Sticky Header khi cuộn trang chi tiết nhà hàng.

Tích hợp react-native-reanimated-carousel cho các banner slider.

Sử dụng react-content-loader để tạo hiệu ứng Skeleton loading, cải thiện trải nghiệm người dùng.

Chức năng nghiệp vụ:

Xác thực người dùng (Đăng nhập, Đăng ký, Quên mật khẩu, Xác thực OTP).

Xử lý logic giỏ hàng (thêm/sửa/xóa, xử lý nhiều tùy chọn cho cùng một món ăn).

Tìm kiếm, lọc sản phẩm, xem lịch sử đơn hàng, quản lý danh sách yêu thích.

🛠 Công nghệ sử dụng 
Core: React Native, Expo, TypeScript

Routing: Expo Router

State Management: React Context API

Form: Formik, Yup

API Client: Axios

Animation: React Native Reanimated, React Native Reanimated Carousel

UI: React Native SVG, React Content Loader

Storage: AsyncStorage

💡 Phạm vi & Hạn chế của dự án
Dự án này tập trung hoàn toàn vào việc xây dựng giao diện người dùng (Frontend) và trải nghiệm trên React Native.

Backend (API): Phần Backend (API, Database) được cung cấp sẵn (do bạn tôi hỗ trợ) và không nằm trong phạm vi của project này. Mục tiêu chính là rèn luyện kỹ năng xử lý và tích hợp API phía client.

Testing: Dự án chưa áp dụng các thư viện testing như Jest hay React Native Testing Library.