// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Aatithya React components
import DMBox from "../../../../components/DMBox";
import DMTypography from "../../../../components/DMTypography";

// Aatithya React base styles
import colors from "../../../../assets/theme/base/colors"
import typography from "../../../../assets/theme/base/typography";
import { Edit } from "@mui/icons-material";

function ProfileInfoCard({ title, description, info, social, action, shadow }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <DMBox key={label} display="flex" py={1} pr={2}>
      <DMTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </DMTypography>
      <DMTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </DMTypography>
    </DMBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color }) => (
    <DMBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </DMBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <DMBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <DMTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </DMTypography>
        <DMTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon><Edit /></Icon>
          </Tooltip>
        </DMTypography>
      </DMBox>
      <DMBox p={2}>
        <DMBox mb={2} lineHeight={1}>
          <DMTypography variant="button" color="text" fontWeight="light">
            {description}
          </DMTypography>
        </DMBox>
        <DMBox opacity={0.3}>
          <Divider />
        </DMBox>
        <DMBox>
          {renderItems}
          <DMBox display="flex" py={1} pr={2}>
            <DMTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </DMTypography>
            {renderSocial}
          </DMBox>
        </DMBox>
      </DMBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
