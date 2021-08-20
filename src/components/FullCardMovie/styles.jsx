import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    backgroundColor: '#2B2243',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'justify',
    padding: '30px 24px',
    gap: '28px',
    '& .MuiCardActions-root': {
      padding: 0,
    },
  },
  movie: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '10px',
    justifyContent: 'space-between',
  },
  movie_description: {
    textAlign: 'justify',
  },
  card_media: {
    minWidth: '176px',
    width: '100%',
    height: '280px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '16px 14px',
  },
  card_content: {
    alignSelf: 'flex-start',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: '18px',
    padding: '0px',
    paddingTop: '10px',
  },
  card_actions: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '140px',
    width: '140px',
    height: '100%',
    justifyContent: 'space-between',
    gap: '24px',
  },
  metarate: {
    alignSelf: 'flex-end',
    marginRight: '10px',
    width: 'auto',
    height: 'auto',
    backgroundColor: 'rgba(43, 34, 67, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '12px 4px 12px 12px',
  },
  metascore: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '17px',
  },
  movie_title: {
    fontWeight: 700,
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    color: 'white',
    backgroundColor: 'rgba(43, 34, 67, 0.8)',
    width: '454px',
    height: '58px',
  },
  movie_tag: {
    backgroundColor: '#000000',
    borderRadius: '5px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '12px',
    letterSpacing: '-2%',
    color: '#EEEAEA',
    height: '25px',
    maxWeight: '32px',
    '& .MuiChip-label': {
      maxWeight: '32px',
      overflow: 'hidden',
      padding: '0 8px',
    },
  },
  movie_tags: {
    alignSelf: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '12px',
  },
  movie_additional: {
    alignSelf: 'flex-end',
    widht: '72px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  movie_images: {
    width: '380px',
    height: '474px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
  },
  movie_image: {
    width: '178px',
    height: '226px',
  },
  infodescription: {
    width: '388px',
    display: 'flex',
    gap: '24px',
    flexDirection: 'column',
  },
  infobox: {
    background: '#000',
    width: '100%',
    height: '100%',
    padding: '46px',
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
  },
  infobox_text: {
    fontSize: '24px',
    lineHeight: '29px',
    fontWeight: '700',
  },
}));
