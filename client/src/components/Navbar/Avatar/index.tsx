import profile from '../../../assets/image-avatar.jpg';

const Avatar = () => {
    return (
        <div className="py-6 border-t-[1px] border-t-[#494e6e]">
            <img
                src={profile}
                alt="Avatar"
                className="w-10 mx-auto rounded-full"
            />
        </div>
    );
};

export default Avatar;
